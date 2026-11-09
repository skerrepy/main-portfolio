import { z } from 'zod';
import { contactCopy } from '../content/contact';
import { locales, type Locale } from '../content/copy';

export const contactFields = ['name', 'email', 'phone', 'subject', 'replyLocale', 'message'] as const;
export type ContactField = typeof contactFields[number];
export type ContactErrors = Partial<Record<ContactField, string>>;

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().pipe(z.email().max(254)),
  phone: z.string().trim().max(50).optional(),
  subject: z.string().trim().min(5).max(150).regex(/^[^\r\n]+$/),
  replyLocale: z.enum(locales).optional(),
  message: z.string().trim().min(10).max(3000),
  website: z.string().optional(),
});

export const honeypotSchema = z.object({ website: z.string().min(1) });

export function validateContact(input: unknown, locale: Locale) {
  const result = schema.safeParse(input);
  if (result.success) return result;

  const fieldErrors: ContactErrors = {};
  for (const field of contactFields) {
    if (result.error.issues.some((issue) => issue.path[0] === field)) {
      fieldErrors[field] = contactCopy[locale].errors[field];
    }
  }
  return { success: false as const, fieldErrors };
}
