'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/lib/services-data'
import FAQ from './FAQ'

export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-500 text-sm mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <span className="badge mb-4">{service.category}</span>
            <h1 className="section-title mb-6">{service.title}</h1>
            <p className="section-body max-w-2xl mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:08009991234" className="btn-primary">
                Emergency Call: 0800 999 1234
              </a>
              <Link href="/contact" className="btn-outline">Request a Callback</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="section" style={{ backgroundColor: '#111111' }}>
        <div className="container">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
            <div>
              {/* Image */}
              {service.image && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative aspect-[16/9] mb-10 overflow-hidden"
                >
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-orange-500" />
                </motion.div>
              )}

              {/* Long description */}
              <div className="prose-crash">
                {service.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Service-specific FAQs */}
              {service.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-heading text-3xl font-black text-white uppercase mb-6">
                    Frequently Asked <span className="text-orange-500">Questions</span>
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
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
                <h3 className="font-heading font-black text-white uppercase text-lg mb-5">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <svg className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="bg-orange-500 p-6">
                <h3 className="font-heading font-black text-white uppercase text-xl mb-3">Need Help Now?</h3>
                <p className="text-orange-100 text-sm mb-5">Available 24/7 — call us immediately for emergency assistance.</p>
                <a href="tel:08009991234" className="block bg-white text-orange-600 font-heading font-black uppercase text-center py-3 px-6 hover:bg-zinc-100 transition-colors">
                  0800 999 1234
                </a>
              </div>

              {/* Other services */}
              <div className="bg-zinc-900 border border-zinc-800 p-6">
                <h3 className="font-heading font-bold text-white uppercase text-sm mb-4">Other Services</h3>
                <ul className="space-y-2">
                  {[
                    { label: 'Breakdown Recovery', slug: 'breakdown-recovery' },
                    { label: 'Flatbed Towing', slug: 'flatbed-towing' },
                    { label: 'Claims Assistance', slug: 'accident-claims' },
                    { label: 'Long Distance', slug: 'long-distance-recovery' },
                  ]
                    .filter(s => s.slug !== service.slug)
                    .map(s => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="text-zinc-400 hover:text-orange-500 text-sm transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-orange-500" />
                          {s.label}
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
