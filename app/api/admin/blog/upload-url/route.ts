import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ error: 'File upload not configured' }, { status: 501 })
}
