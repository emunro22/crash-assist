'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const areas = [
  { name: 'Glasgow', slug: 'glasgow', tag: 'Primary' },
  { name: 'Edinburgh', slug: 'edinburgh', tag: 'Primary' },
  { name: 'Paisley', slug: 'paisley', tag: '' },
  { name: 'Hamilton', slug: 'hamilton', tag: '' },
  { name: 'Motherwell', slug: 'motherwell', tag: '' },
  { name: 'Livingston', slug: 'livingston', tag: '' },
  { name: 'Falkirk', slug: 'falkirk', tag: '' },
  { name: 'Stirling', slug: 'stirling', tag: '' },
  { name: 'Ayr', slug: 'ayr', tag: '' },
  { name: 'Kilmarnock', slug: 'kilmarnock', tag: '' },
  { name: 'Dumfries', slug: 'dumfries', tag: '' },
  { name: 'Perth', slug: 'perth', tag: '' },
  { name: 'Loch Lomond', slug: 'loch-lomond', tag: '' },
  { name: 'Argyll and Bute', slug: 'argyll-and-bute', tag: '' },
]

const motorways = ['M8', 'M74', 'M77', 'M73', 'M80', 'M9', 'M876']

export default function Coverage() {
  return (
    <section className="section" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">Coverage Area</div>
            <h2 className="section-title mb-6">
              Covering<br />
              <span className="text-blue-500">All of</span><br />
              Scotland
            </h2>
            <p className="section-body mb-8">
              Based in Central Scotland, we provide rapid emergency recovery across the entire Scottish
              central belt and beyond. Our network extends to cover all major population centres
              and transport routes.
            </p>

            {/* Motorways */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-bold text-white uppercase mb-4">Motorway Coverage</h3>
              <div className="flex flex-wrap gap-2">
                {motorways.map((m) => (
                  <span key={m} className="bg-blue-500 text-white font-heading font-black text-sm px-3 py-1.5 uppercase tracking-wide">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <a href="tel:+447564016582" className="btn-primary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call Now: +44 7564 016582
            </a>
          </motion.div>

          {/* Right: Area grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-px bg-zinc-800">
              {areas.map((area, i) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/areas/${area.slug}`}
                    className="group flex items-center justify-between bg-zinc-950 hover:bg-zinc-900 p-4 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-500 transition-colors" />
                      <span className="text-zinc-300 group-hover:text-white font-medium text-sm transition-colors">
                        {area.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {area.tag && (
                        <span className="text-blue-500 text-xs font-semibold uppercase tracking-wide">{area.tag}</span>
                      )}
                      <svg className="w-3.5 h-3.5 text-zinc-600 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/areas"
              className="mt-4 flex items-center justify-center gap-2 text-blue-500 hover:text-blue-400 text-sm font-semibold uppercase tracking-wide transition-colors py-3 border border-zinc-800 hover:border-blue-500/30"
            >
              View all coverage areas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
