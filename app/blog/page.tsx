import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import { getBlogPosts, type BlogPost } from '@/lib/db'

export const metadata: Metadata = {
  title: 'Blog & Guides',
  description: 'Expert guides on vehicle recovery, accident claims, road safety and breakdown prevention from Glasgow Breakdown Recovery.',
}

export const revalidate = 3600

export default async function BlogPage() {
  let posts: BlogPost[] = []
  try {
    posts = await getBlogPosts(true)
  } catch {}

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-16 bg-zinc-950">
          <div className="container">
            <div className="section-tag">Knowledge Hub</div>
            <h1 className="section-title mb-4">
              Recovery Guides<br />
              <span className="text-blue-500">& Advice</span>
            </h1>
            <p className="section-body max-w-xl">
              Expert guides on vehicle recovery, accident claims, road safety and breakdown prevention.
              Written by our team of Scotland-based recovery professionals.
            </p>
          </div>
        </section>

        {/* Blog grid */}
        <section className="section" style={{ backgroundColor: '#111111' }}>
          <div className="container">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-zinc-500">No posts published yet. Check back soon.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-zinc-950">
          <div className="container text-center">
            <h2 className="font-heading text-4xl font-black text-white uppercase mb-4">
              Need Immediate Help?
            </h2>
            <p className="section-body mb-8">
              For emergencies, call us directly. We are available 24/7.
            </p>
            <a href="tel:+447564016582" className="btn-primary text-base py-4 px-10">
              Emergency: +44 7564 016582
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
