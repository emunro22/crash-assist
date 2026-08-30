'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/areas', label: 'Areas' },
  { href: '/work', label: 'Our Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/claims', label: 'Claims' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/brand/glasgow-breakdown-recovery-logo.png"
              alt="Glasgow Breakdown Recovery"
              width={85}
              height={64}
              priority
              className="h-16 w-auto flex-shrink-0"
            />
            <div className="font-heading text-lg font-black uppercase leading-none hidden sm:block">
              <span className="text-white">Glasgow Breakdown</span>
              <br />
              <span className="text-blue-500 text-sm tracking-widest">RECOVERY</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-zinc-400 hover:text-white font-body font-medium text-sm uppercase tracking-wide transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right side CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+447564016582"
              className="text-zinc-300 hover:text-orange-500 text-sm font-medium transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +44 7564 016582
            </a>
            <a href="tel:+447564016582" className="btn-primary text-xs py-2.5 px-5">
              Emergency Call
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-zinc-300 group-hover:bg-blue-500 transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-zinc-300 group-hover:bg-blue-500 transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-zinc-300 group-hover:bg-blue-500 transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-zinc-900 border-t border-zinc-800"
          >
            <div className="container py-6 flex flex-col">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 border-b border-zinc-800 text-zinc-300 hover:text-blue-400 font-body font-medium uppercase text-sm tracking-wide transition-colors"
                  >
                    {link.label}
                    <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-col gap-3"
              >
                <a href="tel:+447564016582" className="btn-primary justify-center text-sm">
                  Emergency Call: +44 7564 016582
                </a>
                <Link
                  href="/claims"
                  onClick={() => setMenuOpen(false)}
                  className="btn-outline justify-center text-sm"
                >
                  Start a Claim
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
