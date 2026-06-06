import { NextResponse } from 'next/server'
import { getCustomersByMonth } from '@/lib/db'

async function sendWhatsAppTemplate(phone: string, name: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  if (!token || !phoneNumberId) return false

  const res = await fetch(
    `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: phone,
        type: 'template',
        template: {
          name: 'review_request',
          language: { code: 'en_GB' },
          components: [{ type: 'body', parameters: [{ type: 'text', text: name || 'there' }] }],
        },
      }),
    }
  )
  return res.ok
}

export async function GET(req: Request) {
  const authHeader = req.headers ? (req as Request & { headers: Headers }).headers.get('authorization') : null
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const yearMonth = new Date().toISOString().slice(0, 7)
  const customers = await getCustomersByMonth(yearMonth)

  let sent = 0
  let failed = 0

  for (const c of customers) {
    const ok = await sendWhatsAppTemplate(c.phone, c.name)
    if (ok) sent++; else failed++
  }

  return NextResponse.json({ yearMonth, total: customers.length, sent, failed })
}
