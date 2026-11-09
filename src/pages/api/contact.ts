import type { APIRoute } from 'astro';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { env } from 'cloudflare:workers';
import { Resend } from 'resend';
import { z } from 'zod';
import { locales, type Locale } from '../../content/copy';
import { contactCopy } from '../../content/contact';

export const prerender = false;

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  phone: z.string().trim().max(50).optional(),
  subject: z.string().trim().min(5).max(150).regex(/^[^\r\n]+$/),
  message: z.string().trim().min(10).max(3000),
  website: z.string().optional(),
});
const maxBodyBytes = 40_000;

export const POST: APIRoute = async ({ request, url }) => {
  const type = request.headers.get('content-type')?.split(';')[0];
  const json = type === 'application/json' || request.headers.get('accept')?.includes('application/json');
  let locale: Locale = 'en';

  function respond(status: number, key: 'sent' | 'invalid' | 'failed') {
    const t = contactCopy[locale];
    const headers = { 'Cache-Control': 'no-store' };

    if (json) return Response.json({ message: t[key] }, { status, headers });

    const back = getRelativeLocaleUrl(locale) + '#contact';
    return new Response(
      `<!doctype html><html lang="${locale}"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${t[key]}</title><main><h1>${t[key]}</h1><a href="${back}">${t.back}</a></main></html>`,
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

  const result = schema.safeParse(input);
  if (!result.success) return respond(400, 'invalid');
  const { name, email, phone, subject, message, website } = result.data;
  if (website) return respond(200, 'sent');

  const { RESEND_API_KEY: apiKey, CONTACT_FROM_EMAIL: from } = env;
  if (!apiKey || !from) return respond(503, 'failed');

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to: 'omarhanaficontact@gmail.com',
      replyTo: email,
      subject: `Portfolio enquiry: ${subject}`,
      text: [`Name: ${name}`, `Email: ${email}`, phone && `Phone: ${phone}`, '', message]
        .filter((line) => line !== undefined).join('\n'),
    });
    return error ? respond(502, 'failed') : respond(200, 'sent');
  } catch {
    return respond(502, 'failed');
  }
};
