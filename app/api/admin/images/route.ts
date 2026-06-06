import { NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/auth'
import { getGalleryImages, addGalleryImage } from '@/lib/db'

export async function GET() {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const images = await getGalleryImages()
  return NextResponse.json(images)
}

export async function POST(req: NextRequest) {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const data = await req.json()
  const image = await addGalleryImage(data)
  return NextResponse.json(image, { status: 201 })
}
