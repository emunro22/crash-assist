import { NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/auth'
import { deleteGalleryImage } from '@/lib/db'

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const image = await deleteGalleryImage(parseInt(id, 10))
  if (!image) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(image)
}
