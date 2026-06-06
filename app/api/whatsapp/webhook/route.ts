import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'
import { upsertWhatsAppCustomer } from '@/lib/db'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  if (mode === 'subscribe' && token === process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 })
  }
  return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
}

export async function POST(req: NextRequest) {
  const body = await req.text()

  const signature = req.headers.get('x-hub-signature-256') ?? ''
  const secret = process.env.WHATSAPP_APP_SECRET
  if (secret) {
    const expected = 'sha256=' + createHmac('sha256', secret).update(body).digest('hex')
    if (signature !== expected) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }
  }

  try {
    const data = JSON.parse(body)
    const entry = data?.entry?.[0]
    const change = entry?.changes?.[0]
    const message = change?.value?.messages?.[0]
    const contact = change?.value?.contacts?.[0]

    if (message?.type === 'text' || message?.type === 'order' || message) {
      const phone = message.from
      const name = contact?.profile?.name ?? ''
      const today = new Date().toISOString().slice(0, 10)
      await upsertWhatsAppCustomer({ phone, name, job_date: today })
    }
  } catch {}

  return NextResponse.json({ ok: true })
}
