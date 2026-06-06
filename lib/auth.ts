import { cookies } from 'next/headers'
import { createHmac, timingSafeEqual } from 'crypto'

const SESSION_MS = 7 * 24 * 60 * 60 * 1000 // 7 days
const COOKIE_NAME = 'car-admin-token'

function getSecret(): string {
  const s = process.env.ADMIN_SESSION_SECRET
  if (!s) throw new Error('ADMIN_SESSION_SECRET is not set')
  return s
}

export function createAdminToken(): string {
  const payload = `admin:${Date.now()}`
  const sig = createHmac('sha256', getSecret()).update(payload).digest('hex')
  return Buffer.from(`${payload}:${sig}`).toString('base64url')
}

export function verifyAdminToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64url').toString('utf8')
    const lastColon = decoded.lastIndexOf(':')
    const payload = decoded.slice(0, lastColon)
    const sig = decoded.slice(lastColon + 1)
    const expected = createHmac('sha256', getSecret()).update(payload).digest('hex')
    const sigBuf = Buffer.from(sig)
    const expBuf = Buffer.from(expected)
    if (sigBuf.length !== expBuf.length) return false
    if (!timingSafeEqual(sigBuf, expBuf)) return false
    const ts = parseInt(payload.split(':')[1] ?? '0', 10)
    return Date.now() - ts < SESSION_MS
  } catch {
    return false
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return false
  return verifyAdminToken(token)
}

export { COOKIE_NAME }
