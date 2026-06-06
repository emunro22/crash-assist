import { NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/db'

export async function GET() {
  const posts = await getBlogPosts(true)
  return NextResponse.json(posts, {
    headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
  })
}
