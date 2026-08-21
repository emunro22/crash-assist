import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, phone, message, service } = await req.json().catch(() => ({}))
  if (!phone) return NextResponse.json({ error: 'Phone number required' }, { status: 400 })

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@glasgowbreakdownrecovery.co.uk'
  const toEmail = 'info@glasgowbreakdownrecovery.co.uk'

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Callback Request: ${name || 'Unknown'} (${service || 'General'})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #F7900A;">New Callback Request</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #333; background: #111; color: #aaa; width: 140px;">Name</td><td style="padding: 8px; border: 1px solid #333;">${name || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #333; background: #111; color: #aaa;">Phone</td><td style="padding: 8px; border: 1px solid #333;"><strong>${phone}</strong></td></tr>
            <tr><td style="padding: 8px; border: 1px solid #333; background: #111; color: #aaa;">Service</td><td style="padding: 8px; border: 1px solid #333;">${service || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #333; background: #111; color: #aaa;">Message</td><td style="padding: 8px; border: 1px solid #333;">${message || 'No message'}</td></tr>
          </table>
          <p style="color: #999; font-size: 12px;">Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
        </div>
      `,
    })

    // Confirmation to customer
    if (name && phone.includes('@')) {
      await resend.emails.send({
        from: fromEmail,
        to: phone,
        subject: 'We received your callback request: Glasgow Breakdown Recovery',
        html: `<p>Hi ${name},</p><p>We have received your callback request and will contact you within 30 minutes during business hours.</p><p>For emergencies, call us immediately on <strong>+44 7564 016582</strong>.</p><p>Glasgow Breakdown Recovery Team</p>`,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Email failed' }, { status: 500 })
  }
}
