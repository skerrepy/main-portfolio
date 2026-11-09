import type { APIRoute } from 'astro';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { env } from 'cloudflare:workers';
import { Resend } from 'resend';
import { locales, type Locale } from '../../content/copy';
import { contactCopy } from '../../content/contact';
import { contactEmails } from '../../lib/contact-emails';
import { honeypotSchema, validateContact, type ContactErrors } from '../../lib/contact-validation';

export const prerender = false;

const maxBodyBytes = 40_000;

export const POST: APIRoute = async ({ request, url }) => {
  const type = request.headers.get('content-type')?.split(';')[0];
  const json = type === 'application/json' || request.headers.get('accept')?.includes('application/json');
  let locale: Locale = 'en';

  function respond(status: number, key: 'sent' | 'invalid' | 'failed', fieldErrors?: ContactErrors) {
    const t = contactCopy[locale];
    const headers = { 'Cache-Control': 'no-store' };

    if (json) return Response.json({ message: t[key], fieldErrors }, { status, headers });

    const back = getRelativeLocaleUrl(locale) + '#contact';
    const errors = fieldErrors ? Object.values(fieldErrors).map((message) => `<li>${message}</li>`).join('') : '';
    return new Response(
      `<!doctype html><html lang="${locale}"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${t[key]}</title><main><h1>${t[key]}</h1>${errors ? `<ul>${errors}</ul>` : ''}<a href="${back}">${t.back}</a></main></html>`,
      { status, headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } },
    );
  }

  const origin = request.headers.get('origin');
  if (origin && origin !== url.origin) return respond(403, 'failed');

  if (type !== 'application/x-www-form-urlencoded' && type !== 'application/json') {
    return respond(415, 'invalid');
  }

  let input: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return respond(400, 'invalid');
    const decoder = new TextDecoder();
    let size = 0;
    let body = '';

    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return respond(413, 'invalid');
      }
      body += decoder.decode(value, { stream: true });
    }

    body += decoder.decode();
    input = type === 'application/json' ? JSON.parse(body) : Object.fromEntries(new URLSearchParams(body));
  } catch {
    return respond(400, 'invalid');
  }

  if (input && typeof input === 'object' && 'locale' in input) {
    const requestedLocale = input.locale;
    locale = locales.find((language) => language === requestedLocale) ?? 'en';
  }

  if (honeypotSchema.safeParse(input).success) return respond(200, 'sent');

  const result = validateContact(input, locale);
  if (!result.success) return respond(400, 'invalid', result.fieldErrors);
  const { RESEND_API_KEY: apiKey, CONTACT_FROM_EMAIL: from } = env;
  if (!apiKey || !from) return respond(503, 'failed');

  try {
    const emails = contactEmails(from, result.data, result.data.replyLocale ?? locale);
    const { error } = await new Resend(apiKey).batch.send(emails, { batchValidation: 'strict' });
    return error ? respond(502, 'failed') : respond(200, 'sent');
  } catch {
    return respond(502, 'failed');
  }
};
