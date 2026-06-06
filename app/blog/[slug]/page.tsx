import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { marked } from 'marked'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/db'

export const revalidate = 3600

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts(true)
    return posts.map(p => ({ slug: p.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug).catch(() => null)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover_image_url ? [post.cover_image_url] : [],
    },
  }
}

function formatDate(s: string) {
  return new Date(s).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug).catch(() => null)
  if (!post || !post.published) notFound()

  const html = marked.parse(post.content) as string

  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="pt-36 pb-12 bg-zinc-950">
          <div className="container max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-500 text-sm mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Articles
            </Link>
            <span className="badge mb-4">{post.category}</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-none mb-6">
              {post.title}
            </h1>
            <p className="section-body mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-zinc-600 text-sm">
              <time>{formatDate(post.created_at)}</time>
              <span>·</span>
              <span>Crash Assist Recovery</span>
            </div>
          </div>
        </section>

        {/* Cover image */}
        {post.cover_image_url && (
          <div className="container max-w-4xl pb-0 pt-0">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.cover_image_url}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-orange-500" />
            </div>
          </div>
        )}

        {/* Content */}
        <section className="py-16" style={{ backgroundColor: '#111111' }}>
          <div className="container max-w-4xl">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              <article
                className="prose-crash"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="bg-orange-500 p-6">
                  <h3 className="font-heading font-black text-white uppercase text-xl mb-3">Need Recovery Now?</h3>
                  <p className="text-orange-100 text-sm mb-4">Available 24/7 across Scotland.</p>
                  <a href="tel:08009991234" className="block bg-white text-orange-600 font-heading font-black uppercase text-center py-3 hover:bg-zinc-100 transition-colors">
                    0800 999 1234
                  </a>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-6">
                  <h3 className="font-heading font-bold text-white uppercase text-sm mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/services/accident-recovery" className="text-zinc-400 hover:text-orange-500 transition-colors">Accident Recovery</Link></li>
                    <li><Link href="/services/breakdown-recovery" className="text-zinc-400 hover:text-orange-500 transition-colors">Breakdown Recovery</Link></li>
                    <li><Link href="/services/motorway-recovery" className="text-zinc-400 hover:text-orange-500 transition-colors">Motorway Recovery</Link></li>
                    <li><Link href="/services/accident-claims" className="text-zinc-400 hover:text-orange-500 transition-colors">Claims Assistance</Link></li>
                    <li><Link href="/contact" className="text-zinc-400 hover:text-orange-500 transition-colors">Contact Us</Link></li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
