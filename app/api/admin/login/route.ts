import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { createAdminToken, COOKIE_NAME } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { password } = await req.json().catch(() => ({}))
  if (!password) return NextResponse.json({ error: 'Missing password' }, { status: 400 })

  const expected = process.env.ADMIN_PASSWORD
  if (!expected) return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })

  const a = Buffer.from(password)
  const b = Buffer.from(expected)
  const ok = a.length === b.length && timingSafeEqual(a, b)
  if (!ok) return NextResponse.json({ error: 'Invalid password' }, { status: 401 })

  const token = createAdminToken()
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  })
  return res
}
