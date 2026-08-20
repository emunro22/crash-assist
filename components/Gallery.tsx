import Image from 'next/image'
import Link from 'next/link'
import { getStaticGalleryImages } from '@/lib/gallery-fs'

export default function Gallery() {
  const images = getStaticGalleryImages().slice(0, 8)
  if (images.length === 0) return null

  return (
    <section className="section bg-zinc-950" id="gallery">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <div className="section-tag">Recent Jobs</div>
            <h2 className="section-title">
              Latest Work<br />
              <span className="text-orange-500">We&apos;ve Done</span>
            </h2>
          </div>
          <div>
            <p className="section-body">
              Every job is handled with care and professionalism. Here&apos;s a look at some of
              our recent recovery and transport work across Central Scotland.
            </p>
            <Link href="/work" className="btn-outline mt-6 text-sm">
              View All Our Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden bg-zinc-900 ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <div className={`relative w-full ${i === 0 ? 'aspect-square' : 'aspect-square'}`}>
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 4 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <span className="badge text-xs">{img.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
