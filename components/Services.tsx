'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    slug: 'accident-recovery',
    icon: '🚨',
    title: 'Accident Recovery',
    description: '24/7 rapid response to road traffic accidents. We manage the scene, protect your vehicle and liaise with all parties.',
  },
  {
    slug: 'breakdown-recovery',
    icon: '🔧',
    title: 'Breakdown Recovery',
    description: 'Roadside assistance and vehicle recovery for all types of mechanical breakdown, anywhere in Scotland.',
  },
  {
    slug: 'motorway-recovery',
    icon: '🛣️',
    title: 'Motorway Recovery',
    description: 'Certified operators on all Scottish motorways: M8, M74, M77, M73, M80 and more. Safety first, always.',
  },
  {
    slug: 'flatbed-towing',
    icon: '🚛',
    title: 'Flatbed Towing',
    description: 'Full flatbed transport for AWD vehicles, prestige cars, EVs and severely damaged accident vehicles.',
  },
  {
    slug: 'accident-claims',
    icon: '📋',
    title: 'Claims Assistance',
    description: 'Expert guidance through the insurance claims process. We document the scene and liaise with your insurer.',
  },
  {
    slug: 'long-distance-recovery',
    icon: '🗺️',
    title: 'Long Distance',
    description: 'Broken down far from home? We provide UK-wide long distance recovery back to Scotland.',
  },
  {
    slug: 'motorcycle-recovery',
    icon: '🏍️',
    title: 'Motorcycle Recovery',
    description: 'Specialist motorcycle recovery with purpose-built equipment. Sports bikes, scooters and all bike types.',
  },
  {
    slug: 'commercial-vehicle-recovery',
    icon: '🚐',
    title: 'Commercial Vehicles',
    description: 'Vans, light trucks, minibuses and commercial vehicles. Fleet accounts available with priority dispatch.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section className="section bg-zinc-950">
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">
              Complete Recovery<br />
              <span className="text-orange-500">Services</span>
            </h2>
          </div>
          <div>
            <p className="section-body">
              From minor breakdowns to major motorway incidents, Crash Assist Recovery has the expertise,
              equipment and availability to handle any vehicle emergency across Scotland.
            </p>
            <Link href="/services" className="btn-outline mt-6 text-sm">
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={cardVariants}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col gap-4 bg-zinc-950 p-6 hover:bg-zinc-900 transition-colors duration-300 h-full relative overflow-hidden"
              >
                {/* Orange left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div className="text-3xl">{service.icon}</div>
                <h3 className="font-heading text-xl font-black text-white uppercase group-hover:text-orange-500 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">{service.description}</p>
                <div className="flex items-center gap-2 text-orange-500 text-xs font-semibold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
