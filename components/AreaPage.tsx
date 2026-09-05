'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Area } from '@/lib/areas-data'
import { nearMeAngles } from '@/lib/near-me-data'
import FAQSchema from './FAQSchema'

export default function AreaPage({ area }: { area: Area }) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/areas" className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-500 text-sm mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Areas
            </Link>
            <div className="section-tag mb-4">Coverage Area</div>
            <h1 className="section-title mb-6">{area.headline}</h1>
            <p className="section-body max-w-2xl mb-8">{area.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+447564016582" className="btn-primary">
                Emergency Call: +44 7564 016582
              </a>
              <Link href="/contact" className="btn-outline">Request a Callback</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ backgroundColor: '#111111' }}>
        <div className="container">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
            <div>
              {/* Long description */}
              <div className="prose-crash">
                {area.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* FAQs */}
              {area.faqs.length > 0 && (
                <div className="mt-12">
                  <FAQSchema faqs={area.faqs} />
                  <h2 className="font-heading text-3xl font-black text-white uppercase mb-6">
                    {area.name} Recovery <span className="text-blue-500">FAQs</span>
                  </h2>
                  <div className="space-y-4">
                    {area.faqs.map((faq, i) => (
                      <div key={i} className="border border-zinc-800 p-5">
                        <h3 className="font-heading font-bold text-white uppercase text-sm mb-3">{faq.question}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Features */}
              <div className="bg-zinc-900 border border-zinc-800 p-6">
                <h3 className="font-heading font-black text-white uppercase text-lg mb-5">{area.name} Coverage</h3>
                <ul className="space-y-3">
                  {area.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Postcodes */}
              <div className="bg-zinc-900 border border-zinc-800 p-6">
                <h3 className="font-heading font-bold text-white uppercase text-sm mb-4">Postcodes Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {area.postcodes.map((p) => (
                    <Link
                      key={p}
                      href={`/postcodes/${p.toLowerCase()}`}
                      className="bg-zinc-800 hover:bg-blue-500 text-zinc-300 hover:text-white text-xs font-mono px-2.5 py-1 transition-colors"
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular searches */}
              <div className="bg-zinc-900 border border-zinc-800 p-6">
                <h3 className="font-heading font-bold text-white uppercase text-sm mb-4">Popular Searches</h3>
                <ul className="space-y-2">
                  {nearMeAngles.map((angle) => (
                    <li key={angle.slug}>
                      <Link href={`/areas/${area.slug}/${angle.slug}`} className="text-zinc-400 hover:text-blue-500 text-sm transition-colors flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-500" />
                        {angle.navLabel}: {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-orange-500 p-6">
                <h3 className="font-heading font-black text-white uppercase text-xl mb-3">Broken Down in {area.name}?</h3>
                <p className="text-orange-100 text-sm mb-5">Call us now for immediate dispatch to your location.</p>
                <a href="tel:+447564016582" className="block bg-white text-orange-600 font-heading font-black uppercase text-center py-3 px-6 hover:bg-zinc-100 transition-colors">
                  +44 7564 016582
                </a>
              </div>

              {/* Nearby areas */}
              <div className="bg-zinc-900 border border-zinc-800 p-6">
                <h3 className="font-heading font-bold text-white uppercase text-sm mb-4">Nearby Areas</h3>
                <ul className="space-y-2">
                  {[
                    { label: 'Glasgow', slug: 'glasgow' },
                    { label: 'Edinburgh', slug: 'edinburgh' },
                    { label: 'Hamilton', slug: 'hamilton' },
                    { label: 'Motherwell', slug: 'motherwell' },
                  ]
                    .filter(a => a.slug !== area.slug)
                    .map(a => (
                      <li key={a.slug}>
                        <Link href={`/areas/${a.slug}`} className="text-zinc-400 hover:text-blue-500 text-sm transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-blue-500" />
                          {a.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
