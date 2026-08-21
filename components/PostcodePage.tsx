'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { PostcodeDistrict } from '@/lib/postcodes-data'
import type { Area } from '@/lib/areas-data'
import { getPostcodesByArea } from '@/lib/postcodes-data'

export default function PostcodePage({ postcode, area }: { postcode: PostcodeDistrict; area: Area }) {
  const nearby = getPostcodesByArea(area.slug).filter((p) => p.slug !== postcode.slug)

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
            <Link href="/postcodes" className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-500 text-sm mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Postcodes
            </Link>
            <div className="section-tag mb-4">{area.name} Postcode District</div>
            <h1 className="section-title mb-6">
              Vehicle Recovery in <span className="text-blue-500">{postcode.code}</span>
            </h1>
            <p className="section-body max-w-2xl mb-8">
              {`${postcode.code} is a postcode district within ${area.name}. Glasgow Breakdown Recovery provides 24/7 emergency vehicle recovery and accident assistance covering ${postcode.code} and the surrounding ${area.name} area.`}
            </p>
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
              <div className="prose-crash">
                <p>
                  If you have broken down or been involved in an accident in the {postcode.code} area,
                  Glasgow Breakdown Recovery can help. {postcode.code} falls within our {area.name}{' '}
                  coverage zone, so you get the same fast response, professional recovery and accident
                  assistance we provide across all of {area.name}.
                </p>
                {area.longDescription.split('\n\n').slice(0, 1).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="font-heading text-3xl font-black text-white uppercase mb-6">
                  {postcode.code} Recovery <span className="text-blue-500">FAQs</span>
                </h2>
                <div className="space-y-4">
                  <div className="border border-zinc-800 p-5">
                    <h3 className="font-heading font-bold text-white uppercase text-sm mb-3">
                      Do you cover the {postcode.code} postcode district?
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Yes, {postcode.code} is fully covered as part of our {area.name} operating area.
                      We provide 24/7 emergency recovery to this postcode district every day of the year.
                    </p>
                  </div>
                  {area.faqs.slice(0, 1).map((faq, i) => (
                    <div key={i} className="border border-zinc-800 p-5">
                      <h3 className="font-heading font-bold text-white uppercase text-sm mb-3">{faq.question}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Features (reused from parent area) */}
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

              {/* CTA */}
              <div className="bg-orange-500 p-6">
                <h3 className="font-heading font-black text-white uppercase text-xl mb-3">Broken Down in {postcode.code}?</h3>
                <p className="text-orange-100 text-sm mb-5">Call us now for immediate dispatch to your location.</p>
                <a href="tel:+447564016582" className="block bg-white text-orange-600 font-heading font-black uppercase text-center py-3 px-6 hover:bg-zinc-100 transition-colors">
                  +44 7564 016582
                </a>
              </div>

              {/* Link back to full area page */}
              <div className="bg-zinc-900 border border-zinc-800 p-6">
                <h3 className="font-heading font-bold text-white uppercase text-sm mb-3">Full {area.name} Coverage</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  See our complete coverage details, features and FAQs for the whole {area.name} area.
                </p>
                <Link href={`/areas/${area.slug}`} className="text-blue-500 hover:text-blue-400 text-sm font-semibold uppercase tracking-wide inline-flex items-center gap-2">
                  View {area.name} area page
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Nearby postcodes */}
              {nearby.length > 0 && (
                <div className="bg-zinc-900 border border-zinc-800 p-6">
                  <h3 className="font-heading font-bold text-white uppercase text-sm mb-4">Nearby Postcodes</h3>
                  <div className="flex flex-wrap gap-2">
                    {nearby.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/postcodes/${p.slug}`}
                        className="bg-zinc-800 hover:bg-blue-500 text-zinc-300 hover:text-white text-xs font-mono px-2.5 py-1 transition-colors"
                      >
                        {p.code}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
