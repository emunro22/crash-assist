import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { services } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Full range of emergency vehicle recovery services from Crash Assist Recovery. Accident recovery, breakdown, motorway, flatbed towing, claims assistance and more.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-36 pb-16 bg-zinc-950">
          <div className="container">
            <div className="section-tag">What We Do</div>
            <h1 className="section-title mb-6">
              Our Recovery<br />
              <span className="text-orange-500">Services</span>
            </h1>
            <p className="section-body max-w-xl">
              Comprehensive vehicle recovery and accident assistance services across Scotland.
              Professional, certified and available 24/7.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: '#111111' }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
              {services.map(service => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-zinc-950 hover:bg-zinc-900 p-8 transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <div className="flex items-start gap-5">
                    <div className="text-4xl flex-shrink-0">{service.icon}</div>
                    <div>
                      <span className="badge text-xs mb-3">{service.category}</span>
                      <h2 className="font-heading font-black text-2xl text-white uppercase group-hover:text-orange-500 transition-colors mb-3">
                        {service.title}
                      </h2>
                      <p className="text-zinc-500 text-sm leading-relaxed mb-4">{service.description}</p>
                      <ul className="space-y-1.5 mb-5">
                        {service.features.slice(0, 3).map(f => (
                          <li key={f} className="flex items-center gap-2 text-xs text-zinc-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-orange-500 text-xs font-semibold uppercase tracking-wide">
                        Learn more
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-950 text-center">
          <div className="container">
            <h2 className="font-heading text-4xl font-black text-white uppercase mb-4">
              Ready When You Are
            </h2>
            <p className="section-body mb-8">24/7 emergency dispatch across Scotland.</p>
            <a href="tel:+447564016582" className="btn-primary text-base py-4 px-10">
              Emergency: +44 7564 016582
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
