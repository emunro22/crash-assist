'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '15+', label: 'Years in Business', desc: 'Serving Scotland since 2009' },
  { value: '500+', label: 'Recoveries Completed', desc: 'Across Central Scotland' },
  { value: '99%', label: 'Customer Satisfaction', desc: 'Every job, every time' },
  { value: '< 1hr', label: 'Average Response', desc: 'Across our coverage area' },
]

const features = [
  'Fully trained and certified operators',
  'Comprehensive insurance coverage',
  'Modern, maintained vehicle fleet',
  'Transparent, upfront pricing',
  'Direct insurer liaison capability',
  'Emergency accident claims support',
]

export default function About() {
  return (
    <section className="section" style={{ backgroundColor: '#111111' }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + stat cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[5/6] overflow-hidden">
              <Image
                src="/gallery/ranger-flatbed-recovery-dusk.jpg"
                alt="Crash Assist Recovery flatbed truck on the job"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-orange-500 p-6 shadow-2xl"
            >
              <div className="font-heading text-5xl font-black text-white leading-none">15</div>
              <div className="font-heading text-lg font-bold text-orange-100 uppercase">Years</div>
              <div className="text-orange-200 text-xs">of excellence</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">About Us</div>
            <h2 className="section-title mb-6">
              Built on Trust.<br />
              <span className="text-orange-500">Driven by</span><br />
              Results.
            </h2>
            <p className="section-body mb-8">
              Crash Assist Recovery was founded on a simple principle: when you are stranded and stressed,
              you deserve fast, reliable help from professionals who genuinely care about your safety.
            </p>
            <p className="section-body mb-10">
              Since 2009 we have built our reputation across Scotland by consistently delivering on
              that promise — arriving fast, handling vehicles with care, and treating every customer
              as we would want to be treated ourselves.
            </p>

            {/* Feature list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="mt-0.5 w-4 h-4 flex-shrink-0 flex items-center justify-center bg-orange-500/15 rounded-sm">
                    <svg className="w-2.5 h-2.5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-zinc-800">
              {stats.map((s) => (
                <div key={s.label} className="bg-zinc-900 p-4">
                  <div className="font-heading text-3xl font-black text-orange-500 leading-none mb-1">{s.value}</div>
                  <div className="text-white text-sm font-semibold">{s.label}</div>
                  <div className="text-zinc-500 text-xs">{s.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
