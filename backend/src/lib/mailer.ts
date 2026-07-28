import nodemailer from 'nodemailer'

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env

// Email notification is optional: if SMTP credentials aren't configured,
// the contact form still works and messages are still saved to the database.
const isConfigured = Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && NOTIFY_EMAIL)

const transporter = isConfigured
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null

export async function notifyNewMessage(payload: { name: string; email: string; message: string }) {
  if (!transporter) return { sent: false, reason: 'SMTP not configured' as const }

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    replyTo: payload.email,
    subject: `New portfolio message from ${payload.name}`,
    text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
  })

  return { sent: true as const }
}
