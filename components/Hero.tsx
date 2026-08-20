'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const SLIDES = [
  {
    src: '/gallery/defender-ranger-trailer-transport.jpg',
    alt: 'Crash Assist Recovery flatbed transporting a Land Rover Defender and Ford Ranger',
  },
  {
    src: '/gallery/ranger-flatbed-recovery-dusk.jpg',
    alt: 'Crash Assist Recovery flatbed truck with a Ford Ranger at dusk',
  },
  {
    src: '/gallery/ranger-flatbed-recovery-daytime.jpg',
    alt: 'Crash Assist Recovery flatbed truck loading a Ford Ranger',
  },
]

const stats = [
  { value: '24/7', label: 'Always On' },
  { value: '45 min', label: 'Avg Response' },
  { value: '10,000+', label: 'Recoveries' },
  { value: '15+', label: 'Years Exp.' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 5000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark gradient overlay — heavier at top/bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-zinc-950/55 to-zinc-950/85" />
        {/* Side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-zinc-950/30" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 pt-8 pb-24 lg:pt-12 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="section-tag mb-6">
            Scotland&apos;s Emergency Recovery Specialists
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase leading-none mb-6">
            Crash
            <br />
            <span className="text-orange-500">Assist</span>
            <br />
            Recovery
          </h1>

          <p className="section-body max-w-xl mb-10">
            Fast, professional vehicle recovery and accident assistance across Scotland.
            We are on the scene in under an hour — day or night, every single day.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:+447564016582" className="btn-primary text-base py-4 px-8 animate-pulse-orange">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Emergency: +44 7564 016582
            </a>
            <Link href="/claims" className="btn-outline text-base py-4 px-8">
              Start a Claim
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 max-w-xs sm:max-w-md border border-zinc-700/60 overflow-hidden backdrop-blur-sm">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-zinc-950/70 py-3 px-3 sm:px-4 text-center border-zinc-700/60 ${
                  i % 2 === 0 ? 'border-r' : ''
                } ${i < 2 ? 'border-b sm:border-b-0' : ''} ${
                  i !== stats.length - 1 ? 'sm:border-r' : ''
                }`}
              >
                <div className="font-heading text-xl sm:text-2xl font-black text-orange-500 leading-none">
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-[11px] sm:text-xs uppercase tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating live dispatch badge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute right-8 top-36 hidden xl:flex items-center gap-3 bg-zinc-950/90 border border-orange-500/50 px-4 py-3 shadow-2xl z-20"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
        <div>
          <div className="font-heading font-black text-sm text-white uppercase tracking-wide">Live Dispatch</div>
          <div className="text-orange-500 text-xs">Available now</div>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-0.5 transition-all duration-500 ${i === current ? 'w-8 bg-orange-500' : 'w-4 bg-zinc-600 hover:bg-zinc-400'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span className="text-zinc-500 text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
