import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { areas } from '@/lib/areas-data'
import { getPostcodesByArea } from '@/lib/postcodes-data'

export const metadata: Metadata = {
  title: 'Postcodes We Cover',
  description: 'Browse every postcode district covered by Glasgow Breakdown Recovery across Glasgow, Edinburgh and Central Scotland.',
}

export default function PostcodesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-36 pb-16 bg-zinc-950">
          <div className="container">
            <div className="section-tag">Coverage</div>
            <h1 className="section-title mb-6">
              Postcodes We<br />
              <span className="text-blue-500">Cover</span>
            </h1>
            <p className="section-body max-w-xl">
              Browse coverage by postcode district. Select yours below for local response details,
              or visit the full <Link href="/areas" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">area page</Link> for more detail.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#111111' }}>
          <div className="container space-y-12">
            {areas.map((area) => {
              const postcodes = getPostcodesByArea(area.slug)
              if (postcodes.length === 0) return null
              return (
                <div key={area.slug}>
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="font-heading font-black text-xl text-white uppercase">{area.name}</h2>
                    <Link href={`/areas/${area.slug}`} className="text-blue-500 hover:text-blue-400 text-xs font-semibold uppercase tracking-wide flex items-center gap-2">
                      Area page
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {postcodes.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/postcodes/${p.slug}`}
                        className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:text-blue-500 text-zinc-300 text-sm font-mono px-3 py-1.5 transition-colors"
                      >
                        {p.code}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="py-16 bg-zinc-950 text-center">
          <div className="container">
            <h2 className="font-heading text-4xl font-black text-white uppercase mb-4">
              Can&apos;t Find Your Postcode?
            </h2>
            <p className="section-body mb-8">Call us. If we can reach you, we will.</p>
            <a href="tel:+447564016582" className="btn-primary text-base py-4 px-10">
              Call: +44 7564 016582
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
