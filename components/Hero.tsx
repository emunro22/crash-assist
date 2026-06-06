'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { value: '24/7', label: 'Always On' },
  { value: '45 min', label: 'Avg Response' },
  { value: '10,000+', label: 'Recoveries' },
  { value: '15+', label: 'Years Exp.' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-zinc-950 flex items-center overflow-hidden pt-20">
      {/* Background geometric split */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[45%] h-full bg-zinc-900" />
        {/* Diagonal separator */}
        <div
          className="absolute top-0 h-full w-32"
          style={{
            right: '43%',
            background: 'linear-gradient(to bottom right, transparent 50%, #18181B 50%)',
            transform: 'skewX(-2deg)',
          }}
        />
        {/* Orange corner accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/3 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-tag mb-6"
            >
              Scotland&apos;s Emergency Recovery Specialists
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white uppercase leading-none mb-6"
            >
              Crash
              <br />
              <span className="text-orange-500">Assist</span>
              <br />
              Recovery
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="section-body max-w-md mb-10"
            >
              Fast, professional vehicle recovery and accident assistance across Scotland.
              We are on the scene in under an hour — day or night, every single day.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a href="tel:08009991234" className="btn-primary text-base py-4 px-8 animate-pulse-orange">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Emergency: 0800 999 1234
              </a>
              <Link href="/claims" className="btn-outline text-base py-4 px-8">
                Start a Claim
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-4 gap-0 border border-zinc-800"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className={`py-4 px-3 text-center ${i < stats.length - 1 ? 'border-r border-zinc-800' : ''}`}
                >
                  <div className="font-heading text-xl sm:text-2xl font-black text-orange-500 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wide mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="Crash Assist Recovery — emergency recovery truck on Scottish road"
                fill
                className="object-cover"
                priority
              />
              {/* Orange colour overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-zinc-950/60" />
              {/* Geometric frame */}
              <div className="absolute inset-4 border border-orange-500/25 pointer-events-none" />
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500" />
            </div>

            {/* Floating availability badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -left-6 top-12 bg-zinc-950 border border-orange-500/50 px-4 py-3 shadow-xl shadow-black/60"
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                <div>
                  <div className="font-heading font-black text-sm text-white uppercase">Live Dispatch</div>
                  <div className="text-orange-500 text-xs">Available now</div>
                </div>
              </div>
            </motion.div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -right-4 bottom-16 bg-orange-500 px-4 py-3 shadow-xl"
            >
              <div className="font-heading font-black text-2xl text-white leading-none">No.1</div>
              <div className="text-orange-100 text-xs uppercase tracking-wide">in Scotland</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-zinc-600 text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
