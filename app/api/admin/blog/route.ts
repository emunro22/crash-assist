import { NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/auth'
import { getBlogPosts, addBlogPost } from '@/lib/db'

export async function GET() {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const posts = await getBlogPosts()
  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const data = await req.json()
  const post = await addBlogPost(data)
  return NextResponse.json(post, { status: 201 })
}
