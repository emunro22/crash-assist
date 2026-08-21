import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motorways } from '@/lib/motorways-data'

export const metadata: Metadata = {
  title: 'Motorways We Cover',
  description: 'Glasgow Breakdown Recovery covers the M8, M74, M77, M73, M80, M9, M876 and M90 with 24/7 emergency recovery for breakdowns and accidents.',
}

export default function MotorwaysPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-36 pb-16 bg-zinc-950">
          <div className="container">
            <div className="section-tag">Coverage</div>
            <h1 className="section-title mb-6">
              Motorways We<br />
              <span className="text-blue-500">Cover</span>
            </h1>
            <p className="section-body max-w-xl">
              We provide 24/7 emergency recovery across Central Scotland&apos;s motorway network.
              Select a motorway for junction-by-junction coverage details.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#111111' }}>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
              {motorways.map(motorway => (
                <Link
                  key={motorway.slug}
                  href={`/motorways/${motorway.slug}`}
                  className="group bg-zinc-950 hover:bg-zinc-900 p-6 transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <h2 className="font-heading font-black text-2xl text-white uppercase group-hover:text-blue-500 transition-colors mb-3">
                    {motorway.name}
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{motorway.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {motorway.junctions.slice(0, 3).map(j => (
                      <span key={j} className="bg-zinc-800 text-zinc-400 text-xs font-mono px-2 py-0.5">{j}</span>
                    ))}
                    {motorway.junctions.length > 3 && (
                      <span className="text-zinc-600 text-xs">+{motorway.junctions.length - 3} more</span>
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
              Broken Down on a Motorway?
            </h2>
            <p className="section-body mb-8">Stay safe, call us, and we&apos;ll get to you fast.</p>
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
