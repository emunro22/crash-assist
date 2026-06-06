'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Alistair MacPherson',
    location: 'Glasgow',
    rating: 5,
    text: "Had an accident on the M8 at 11pm. Crash Assist were on scene within 50 minutes. The driver was calm, professional and brilliant at dealing with a stressful situation. Couldn't recommend more highly.",
    service: 'Motorway Recovery',
  },
  {
    name: 'Sarah Donnelly',
    location: 'Edinburgh',
    rating: 5,
    text: "My car broke down on the A720 ring road during rush hour. These guys were there in under an hour and handled everything with my insurance company too. Absolute lifesavers.",
    service: 'Breakdown Recovery',
  },
  {
    name: 'James Henderson',
    location: 'Hamilton',
    rating: 5,
    text: "Used them after a non-fault accident in Hamilton. The claims assistance service was brilliant — they sorted all the documentation and I ended up with a full settlement within 6 weeks.",
    service: 'Claims Assistance',
  },
  {
    name: 'Fiona Campbell',
    location: 'Paisley',
    rating: 5,
    text: "My Tesla Model 3 broke down and I was panicking about EV recovery. The Crash Assist team knew exactly what to do — flatbed only, handled with complete care. Really impressed.",
    service: 'EV Flatbed Recovery',
  },
  {
    name: 'Craig Thomson',
    location: 'Motherwell',
    rating: 5,
    text: "Professional, prompt and fairly priced. Used them twice now — once for a breakdown and once after a minor accident. Both times they were outstanding. Saved their number permanently.",
    service: 'Accident Recovery',
  },
  {
    name: 'Linda Fraser',
    location: 'Ayr',
    rating: 5,
    text: "As a woman travelling alone, the crew made me feel completely safe and reassured throughout the whole recovery. Absolutely first class service from start to finish.",
    service: 'Breakdown Recovery',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section bg-zinc-950">
      <div className="container">
        <div className="text-center mb-14">
          <div className="section-tag justify-center">Customer Reviews</div>
          <h2 className="section-title">
            What Our Customers<br />
            <span className="text-orange-500">Are Saying</span>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="card p-6 flex flex-col gap-4 relative group"
            >
              {/* Orange quote mark */}
              <div className="absolute top-5 right-6 font-heading text-6xl font-black text-orange-500/15 leading-none select-none">
                &ldquo;
              </div>

              <Stars count={t.rating} />

              <p className="text-zinc-300 leading-relaxed text-sm flex-1 italic">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-zinc-500 text-xs">{t.location}</div>
                </div>
                <span className="badge text-xs">{t.service}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 py-8 border border-zinc-800 bg-zinc-900"
        >
          <div className="text-center">
            <div className="font-heading text-5xl font-black text-orange-500">4.9</div>
            <Stars count={5} />
            <div className="text-zinc-500 text-xs mt-1">Average rating</div>
          </div>
          <div className="w-px h-14 bg-zinc-800 hidden sm:block" />
          <div className="text-center">
            <div className="font-heading text-5xl font-black text-white">600+</div>
            <div className="text-zinc-400 text-sm mt-1">Verified reviews</div>
            <div className="text-zinc-600 text-xs">Google · Facebook · Trustpilot</div>
          </div>
          <div className="w-px h-14 bg-zinc-800 hidden sm:block" />
          <div className="max-w-xs text-center text-zinc-400 text-sm">
            Trusted by thousands of Scottish drivers since 2009.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
