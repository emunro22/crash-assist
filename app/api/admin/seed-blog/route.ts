import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/auth'
import { addBlogPost, getBlogPosts } from '@/lib/db'
import { blogSeedPosts } from '@/lib/blog-seed-data'

export async function POST() {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const existing = await getBlogPosts()
  const existingSlugs = new Set(existing.map(p => p.slug))

  let inserted = 0
  let skipped = 0

  for (const post of blogSeedPosts) {
    if (existingSlugs.has(post.slug)) { skipped++; continue }
    await addBlogPost({ ...post, published: true, cover_image_path: null })
    inserted++
  }

  return NextResponse.json({ inserted, skipped, total: blogSeedPosts.length })
}
