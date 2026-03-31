import 'server-only'

type SendBusinessEmailArgs = {
  submittedAt: string
  fullName: string
  email: string
  phone?: string
  subject: string
  message: string
  companyProject?: string
}

const RESEND_API_URL = 'https://api.resend.com/emails'
const businessInbox = process.env.CONTACT_TO_EMAIL || 'info@bbouwadvies.nl'
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ||
  process.env.RESEND_FROM_EMAIL ||
  'B Bouwadvies <onboarding@resend.dev>'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

async function sendResendEmail(payload: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error('missing_resend_api_key')
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`resend_error:${response.status}:${body}`)
  }
}

export async function sendBusinessContactEmail({
  submittedAt,
  fullName,
  email,
  phone,
  subject,
  message,
  companyProject,
}: SendBusinessEmailArgs) {
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />')

  await sendResendEmail({
    from: fromEmail,
    to: [businessInbox],
    reply_to: email,
    subject: `Nieuw contactverzoek: ${subject}`,
    text: [
      'Nieuw contactverzoek via bbouwadvies.nl',
      '',
      `Naam: ${fullName}`,
      `E-mail: ${email}`,
      `Telefoon: ${phone || '-'}`,
      `Bedrijf / project: ${companyProject || '-'}`,
      `Onderwerp: ${subject}`,
      `Tijdstip: ${submittedAt}`,
      '',
      'Bericht:',
      message,
    ].join('\n'),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#2d3432;">
        <h2 style="margin:0 0 16px;">Nieuw contactverzoek</h2>
        <p style="margin:0 0 24px;">Er is een nieuwe aanvraag binnengekomen via bbouwadvies.nl.</p>
        <table style="border-collapse:collapse;width:100%;max-width:720px;">
          <tbody>
            <tr><td style="padding:8px 0;font-weight:700;">Naam</td><td style="padding:8px 0;">${escapeHtml(fullName)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">E-mail</td><td style="padding:8px 0;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Telefoon</td><td style="padding:8px 0;">${escapeHtml(phone || '-')}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Bedrijf / project</td><td style="padding:8px 0;">${escapeHtml(companyProject || '-')}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Onderwerp</td><td style="padding:8px 0;">${escapeHtml(subject)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Tijdstip</td><td style="padding:8px 0;">${escapeHtml(submittedAt)}</td></tr>
          </tbody>
        </table>
        <div style="margin-top:24px;padding:16px;background:#f2f4f2;">
          <div style="font-weight:700;margin-bottom:8px;">Bericht</div>
          <div>${safeMessage}</div>
        </div>
      </div>
    `,
  })
}

export async function sendContactAutoReply({
  fullName,
  email,
}: Pick<SendBusinessEmailArgs, 'fullName' | 'email'>) {
  await sendResendEmail({
    from: fromEmail,
    to: [email],
    subject: 'Wij hebben uw bericht ontvangen',
    text: [
      `Beste ${fullName},`,
      '',
      'Bedankt voor uw bericht aan B Bouwadvies.',
      'Wij hebben uw aanvraag goed ontvangen en nemen zo spoedig mogelijk contact met u op.',
      '',
      'Met vriendelijke groet,',
      'B Bouwadvies',
    ].join('\n'),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#2d3432;">
        <p>Beste ${escapeHtml(fullName)},</p>
        <p>Bedankt voor uw bericht aan B Bouwadvies.</p>
        <p>Wij hebben uw aanvraag goed ontvangen en nemen zo spoedig mogelijk contact met u op.</p>
        <p>Met vriendelijke groet,<br />B Bouwadvies</p>
      </div>
    `,
  })
}
