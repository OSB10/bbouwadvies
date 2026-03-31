import { z } from 'zod'

const normalizeInline = (value: string) => value.replace(/\s+/g, ' ').trim()

const normalizeMessage = (value: string) =>
  value
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

const requiredText = (label: string, min: number, max: number) =>
  z.preprocess(
    (value) => (typeof value === 'string' ? normalizeInline(value) : ''),
    z
      .string()
      .min(1, `${label} is verplicht.`)
      .min(min, `${label} moet minimaal ${min} tekens bevatten.`)
      .max(max, `${label} mag maximaal ${max} tekens bevatten.`),
  )

const optionalText = (max: number) =>
  z.preprocess(
    (value) => (typeof value === 'string' ? normalizeInline(value) : ''),
    z
      .string()
      .max(max, `Dit veld mag maximaal ${max} tekens bevatten.`)
      .transform((value) => value || undefined),
  )

export const contactFormSchema = z.object({
  fullName: requiredText('Naam', 2, 120),
  email: z.preprocess(
    (value) => (typeof value === 'string' ? normalizeInline(value) : ''),
    z
      .string()
      .min(1, 'E-mailadres is verplicht.')
      .email('Voer een geldig e-mailadres in.')
      .max(254, 'E-mailadres is te lang.'),
  ),
  phone: optionalText(40),
  subject: requiredText('Onderwerp', 3, 120),
  message: z.preprocess(
    (value) => (typeof value === 'string' ? normalizeMessage(value) : ''),
    z
      .string()
      .min(1, 'Bericht is verplicht.')
      .min(20, 'Bericht moet minimaal 20 tekens bevatten.')
      .max(5000, 'Bericht mag maximaal 5000 tekens bevatten.'),
  ),
  companyProject: optionalText(160),
  website: z.preprocess(
    (value) => (typeof value === 'string' ? normalizeInline(value) : ''),
    z.string(),
  ),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export function normalizeContactFormInput(
  input: Partial<Record<keyof ContactFormValues, unknown>>,
) {
  return {
    fullName: typeof input.fullName === 'string' ? input.fullName : '',
    email: typeof input.email === 'string' ? input.email : '',
    phone: typeof input.phone === 'string' ? input.phone : '',
    subject: typeof input.subject === 'string' ? input.subject : '',
    message: typeof input.message === 'string' ? input.message : '',
    companyProject:
      typeof input.companyProject === 'string' ? input.companyProject : '',
    website: typeof input.website === 'string' ? input.website : '',
  }
}
