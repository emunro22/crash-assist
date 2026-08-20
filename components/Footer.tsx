import Image from 'next/image'
import Link from 'next/link'

const services = [
  { label: 'Accident Recovery', href: '/services/accident-recovery' },
  { label: 'Breakdown Recovery', href: '/services/breakdown-recovery' },
  { label: 'Motorway Recovery', href: '/services/motorway-recovery' },
  { label: 'Flatbed Towing', href: '/services/flatbed-towing' },
  { label: 'Claims Assistance', href: '/services/accident-claims' },
  { label: 'Motorcycle Recovery', href: '/services/motorcycle-recovery' },
]

const areas = [
  { label: 'Glasgow', href: '/areas/glasgow' },
  { label: 'Edinburgh', href: '/areas/edinburgh' },
  { label: 'Paisley', href: '/areas/paisley' },
  { label: 'Hamilton', href: '/areas/hamilton' },
  { label: 'Motherwell', href: '/areas/motherwell' },
  { label: 'Stirling', href: '/areas/stirling' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900">
      {/* CTA Banner */}
      <div className="bg-orange-500 py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-black text-white uppercase">Need Emergency Recovery?</h2>
            <p className="text-orange-100 text-sm mt-1">Available 24/7 · 365 days · Across Scotland</p>
          </div>
          <a
            href="tel:08009991234"
            className="flex-shrink-0 bg-white text-orange-600 font-heading font-black text-lg uppercase px-8 py-4 hover:bg-zinc-100 transition-colors flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            0800 999 1234
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/brand/crash-assist-logo-web.png"
                alt="Crash Assist Recovery"
                width={56}
                height={48}
                className="h-11 w-auto flex-shrink-0"
              />
              <div className="font-heading font-black uppercase text-base leading-none">
                <span className="text-white">Crash Assist</span>
                <br />
                <span className="text-orange-500 text-xs tracking-widest">RECOVERY</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Scotland&apos;s trusted 24/7 emergency vehicle recovery and accident assistance specialists.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:08009991234" className="flex items-center gap-2.5 text-zinc-400 hover:text-orange-500 transition-colors">
                <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                0800 999 1234
              </a>
              <a href="mailto:info@crashassistrecovery.co.uk" className="flex items-center gap-2.5 text-zinc-400 hover:text-orange-500 transition-colors">
                <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@crashassistrecovery.co.uk
              </a>
              <div className="flex items-start gap-2.5 text-zinc-400">
                <svg className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Central Scotland
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase text-sm tracking-wider mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-orange-500" />
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-zinc-500 hover:text-orange-500 text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-zinc-700 rounded-full flex-shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase text-sm tracking-wider mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-orange-500" />
              Areas
            </h3>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="text-zinc-500 hover:text-orange-500 text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-zinc-700 rounded-full flex-shrink-0" />
                    {a.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-orange-500 hover:text-orange-400 text-sm transition-colors font-medium">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold text-white uppercase text-sm tracking-wider mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-orange-500" />
              Availability
            </h3>
            <div className="bg-zinc-900 border border-zinc-800 p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Open Now</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-zinc-300">
                  <span>Mon – Sun</span>
                  <span className="text-white font-medium">24 Hours</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Bank Holidays</span>
                  <span className="text-white font-medium">24 Hours</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Christmas</span>
                  <span className="text-white font-medium">24 Hours</span>
                </div>
              </div>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/blog" className="text-zinc-500 hover:text-orange-500 transition-colors">Blog & Guides</Link></li>
              <li><Link href="/work" className="text-zinc-500 hover:text-orange-500 transition-colors">Our Work</Link></li>
              <li><Link href="/contact" className="text-zinc-500 hover:text-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/claims" className="text-zinc-500 hover:text-orange-500 transition-colors">Accident Claims</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900 py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Crash Assist Recovery. All rights reserved. Registered in Scotland.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
