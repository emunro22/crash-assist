import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/db'

function formatDate(s: string) {
  return new Date(s).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="card overflow-hidden transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[16/9] bg-zinc-800 overflow-hidden">
          {post.cover_image_url ? (
            <Image
              src={post.cover_image_url}
              alt={post.title}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-zinc-800 flex items-center justify-center">
              <svg className="w-16 h-16 text-blue-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="badge text-xs">{post.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-zinc-600 text-xs uppercase tracking-wider mb-2">{formatDate(post.created_at)}</p>
          <h3 className="font-heading font-black text-lg text-white uppercase leading-tight mb-3 group-hover:text-blue-500 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-1.5 text-blue-500 text-xs font-semibold uppercase tracking-wide">
            Read more
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
