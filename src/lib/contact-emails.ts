import { languageNames, type Locale } from '../content/copy';

const inbox = 'contact@omarhanafi.dev';
const receipts = {
  en: {
    subject: 'I received your message',
    body: 'Thanks for reaching out. I’ve received your message and will get back to you soon.',
  },
  fr: {
    subject: 'J’ai bien reçu votre message',
    body: 'Merci de m’avoir contacté. J’ai bien reçu votre message et je vous répondrai bientôt.',
  },
  nl: {
    subject: 'Ik heb je bericht ontvangen',
    body: 'Bedankt voor je bericht. Ik heb het ontvangen en neem binnenkort contact met je op.',
  },
} satisfies Record<Locale, { subject: string; body: string }>;

const htmlEntities: Record<string, string> = {
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => htmlEntities[character]);
}

function brandedEmail(locale: Locale, heading: string, paragraphs: string[]) {
  const body = paragraphs.map((paragraph) =>
    `<p style="margin:0 0 16px;overflow-wrap:anywhere">${escapeHtml(paragraph).replace(/\r\n|\r|\n/g, '<br>')}</p>`,
  ).join('');

  return `<!doctype html>
<html lang="${locale}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(heading)}</title></head>
<body style="margin:0;background:#f3eee3;color:#111111;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3eee3">
    <tr><td align="center" style="padding:24px 16px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;text-align:left">
        <tr><td style="background:#111111;color:#f3eee3;border-top:5px solid #d9541e;padding:24px">
          <p style="margin:0 0 12px;font-size:14px;font-weight:bold">Omar Hanafi</p>
          <h1 style="margin:0;font-size:26px;line-height:1.2">${escapeHtml(heading)}</h1>
        </td></tr>
        <tr><td style="padding:24px;border:1px solid #d9d0c2;font-size:16px;line-height:1.55">${body}</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export function contactEmails(from: string, submission: ContactMessage, locale: Locale) {
  const { name, email, phone, subject, message } = submission;
  const receipt = receipts[locale];
  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Preferred reply language: ${languageNames[locale]} (${locale.toUpperCase()})`,
    `Subject: ${subject}`,
  ];
  if (phone) details.push(`Phone: ${phone}`);

  return [
    {
      from,
      to: inbox,
      replyTo: email,
      subject: `Portfolio enquiry: ${subject}`,
      text: [details.join('\n'), message].join('\n\n'),
      html: brandedEmail('en', 'New portfolio enquiry', [details.join('\n'), message]),
    },
    {
      from,
      to: email,
      replyTo: inbox,
      subject: receipt.subject,
      text: `${receipt.body}\n\nOmar Hanafi`,
      html: brandedEmail(locale, receipt.subject, [receipt.body, 'Omar Hanafi']),
    },
  ];
}
