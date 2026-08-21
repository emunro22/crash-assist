import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getGalleryImages } from '@/lib/db'
import { getStaticGalleryImages } from '@/lib/gallery-fs'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'See Glasgow Breakdown Recovery in action. Gallery of our vehicle recovery, accident response and transportation work across Scotland.',
}

export const revalidate = 3600

export default async function WorkPage() {
  // Photos dropped into /public/gallery show up automatically, no DB or admin upload needed.
  const staticImages = getStaticGalleryImages()

  let dbImages: Awaited<ReturnType<typeof getGalleryImages>> = []
  try {
    dbImages = await getGalleryImages()
  } catch {}

  const images = [
    ...staticImages.map((img) => ({ id: img.id, url: img.url, title: img.title, tag: img.tag })),
    ...dbImages.map((img) => ({ id: String(img.id), url: img.url, title: img.title, tag: img.tag })),
  ]

  return (
    <>
      <Header />
      <main>
        <section className="pt-36 pb-16 bg-zinc-950">
          <div className="container">
            <div className="section-tag">Portfolio</div>
            <h1 className="section-title mb-4">
              Our Work<br />
              <span className="text-blue-500">in Action</span>
            </h1>
            <p className="section-body max-w-xl">
              A selection of our vehicle recovery, accident response and transportation jobs across Central Scotland.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#111111' }}>
          <div className="container">
            {images.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-zinc-500">Gallery coming soon.</p>
              </div>
            ) : (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map(img => (
                  <div key={img.id} className="break-inside-avoid group relative overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.title || 'Glasgow Breakdown Recovery'}
                      width={600}
                      height={400}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/60 transition-all duration-300 flex items-end">
                      <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="badge text-xs">{img.tag}</span>
                        {img.title && <p className="text-white text-sm font-medium mt-1">{img.title}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
