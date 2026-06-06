import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { areas } from '@/lib/areas-data'

export const metadata: Metadata = {
  title: 'Areas We Cover',
  description: 'Crash Assist Recovery covers Glasgow, Edinburgh, Paisley, Hamilton, Motherwell, Livingston, Falkirk, Stirling, Ayr and all of Central Scotland.',
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
              <span className="text-orange-500">Cover</span>
            </h1>
            <p className="section-body max-w-xl">
              Based in Central Scotland, we provide 24/7 emergency recovery across all major towns,
              cities and motorway networks. Select your area for specific coverage details.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#111111' }}>
          <div className="container">
            {/* Motorways banner */}
            <div className="bg-orange-500 p-6 mb-12 flex flex-wrap gap-3 items-center">
              <span className="text-white font-heading font-black uppercase text-lg mr-4">Motorways:</span>
              {['M8', 'M74', 'M77', 'M73', 'M80', 'M9', 'M876'].map(m => (
                <span key={m} className="bg-white text-orange-600 font-heading font-black text-sm px-3 py-1">
                  {m}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
              {areas.map(area => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group bg-zinc-950 hover:bg-zinc-900 p-6 transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <h2 className="font-heading font-black text-2xl text-white uppercase group-hover:text-orange-500 transition-colors mb-3">
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
                  <div className="flex items-center gap-2 text-orange-500 text-xs font-semibold uppercase tracking-wide">
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
            <p className="section-body mb-8">Call us — if we can reach you, we will.</p>
            <a href="tel:08009991234" className="btn-primary text-base py-4 px-10">
              Call: 0800 999 1234
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
