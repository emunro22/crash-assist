import { NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/auth'
import { put } from '@vercel/blob'

export async function POST(req: NextRequest) {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { filename, contentType } = await req.json()
  const blob = await put(`blog/${filename}`, new Uint8Array(0), {
    access: 'public',
    contentType,
    addRandomSuffix: true,
  })
  return NextResponse.json({ url: blob.url, uploadUrl: blob.url })
}
