import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { areas } from '@/lib/areas-data'
import { motorways } from '@/lib/motorways-data'

export const metadata: Metadata = {
  title: 'Areas We Cover',
  description: 'Glasgow Breakdown Recovery covers Glasgow, Edinburgh, Paisley, Hamilton, Motherwell, Livingston, Falkirk, Stirling, Ayr and all of Central Scotland.',
  alternates: { canonical: '/areas' },
}

export default function AreasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-36 pb-16 bg-zinc-950">
          <div className="container">
            <div className="section-tag">Coverage</div>
            <h1 className="section-title mb-6">
              Areas We<br />
              <span className="text-blue-500">Cover</span>
            </h1>
            <p className="section-body max-w-xl">
              Based in Central Scotland, we provide 24/7 emergency recovery across all major towns,
              cities and motorway networks. Select your area for specific coverage details, or browse
              by <Link href="/postcodes" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">postcode</Link> or <Link href="/motorways" className="text-blue-500 hover:text-blue-400 underline underline-offset-2">motorway</Link>.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#111111' }}>
          <div className="container">
            {/* Motorways banner */}
            <div className="bg-blue-500 p-6 mb-12 flex flex-wrap gap-3 items-center">
              <span className="text-white font-heading font-black uppercase text-lg mr-4">Motorways:</span>
              {motorways.map(m => (
                <Link
                  key={m.slug}
                  href={`/motorways/${m.slug}`}
                  className="bg-white hover:bg-zinc-100 text-blue-600 font-heading font-black text-sm px-3 py-1 transition-colors"
                >
                  {m.name}
                </Link>
              ))}
              <Link href="/motorways" className="text-white text-sm font-semibold underline underline-offset-2 ml-2">
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
              {areas.map(area => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group bg-zinc-950 hover:bg-zinc-900 p-6 transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <h2 className="font-heading font-black text-2xl text-white uppercase group-hover:text-blue-500 transition-colors mb-3">
                    {area.name}
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {area.postcodes.slice(0, 4).map(p => (
                      <span key={p} className="bg-zinc-800 text-zinc-400 text-xs font-mono px-2 py-0.5">{p}</span>
                    ))}
                    {area.postcodes.length > 4 && (
                      <span className="text-zinc-600 text-xs">+{area.postcodes.length - 4} more</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-blue-500 text-xs font-semibold uppercase tracking-wide">
                    View coverage
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-950 text-center">
          <div className="container">
            <h2 className="font-heading text-4xl font-black text-white uppercase mb-4">
              Not Sure if We Cover You?
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
