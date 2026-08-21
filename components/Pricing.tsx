'use client'

import { motion } from 'framer-motion'

const tiers = [
  {
    title: 'Local Recovery',
    price: 'From £60',
    note: 'Call out',
    detail: '+ £1.50 per mile',
    icon: '🚚',
    items: [
      'Glasgow, Edinburgh & surrounding areas',
      'Cars, vans and light commercial',
      'Clear price quoted on the phone',
    ],
  },
  {
    title: 'Motorway & Live Lane',
    price: '£120',
    note: 'Flat rate',
    detail: '+ £1.50 per mile',
    icon: '🚨',
    items: [
      'M8, M74, M77, M73, M80, M9',
      'Live lane and hard shoulder',
      'Priority dispatch for safety',
    ],
    featured: true,
  },
  {
    title: 'Additional Services',
    price: '£40',
    note: 'Each',
    detail: 'Winch fee or skate fee',
    icon: '🔧',
    items: [
      'Winch fee where required',
      'Skate fee for immobilised vehicles',
      'Applied only when needed',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="section" style={{ backgroundColor: '#0D0D0D' }} id="pricing">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag justify-center">Pricing</div>
          <h2 className="section-title">
            Transparent,<br />
            <span className="text-blue-500">Up-Front Pricing</span>
          </h2>
          <p className="section-body">
            No hidden fees, no surprises. Every job is quoted clearly on the phone before we
            dispatch, so you&apos;ll know exactly what you&apos;re paying before we set off.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.title}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className={`card p-8 flex flex-col ${
                tier.featured ? 'border-blue-500/60 bg-zinc-900 relative' : ''
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge">Most Requested</span>
              )}
              <div className="text-4xl mb-5">{tier.icon}</div>
              <h3 className="font-heading text-xl font-black text-white uppercase mb-4">{tier.title}</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <strong className="font-heading text-4xl font-black text-blue-500">{tier.price}</strong>
                <span className="text-zinc-500 text-sm">{tier.note}</span>
              </div>
              <p className="text-zinc-500 text-sm mb-6">{tier.detail}</p>
              <ul className="space-y-3 flex-1">
                {tier.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-0.5 w-4 h-4 flex-shrink-0 flex items-center justify-center bg-blue-500/15 rounded-sm">
                      <svg className="w-2.5 h-2.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-start gap-3 max-w-2xl mx-auto mt-10 text-zinc-500 text-sm">
          <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>
            All prices subject to VAT. Final quote depends on location, distance and vehicle
            type, so call us for an exact price before we dispatch.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <a href="tel:+447564016582" className="btn-primary">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Get a Quote: +44 7564 016582
          </a>
        </div>
      </div>
    </section>
  )
}
