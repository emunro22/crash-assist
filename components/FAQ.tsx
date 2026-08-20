'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How quickly can you reach me in an emergency?',
    answer:
      'Our average response time across Central Scotland is 45–60 minutes. For Glasgow city centre postcodes, we often arrive in under 40 minutes. We dispatch immediately upon receiving your call — 24 hours a day, 7 days a week, every day of the year.',
  },
  {
    question: 'Are you available on Christmas Day and bank holidays?',
    answer:
      'Yes. Crash Assist Recovery never closes. We operate with full dispatch capability on Christmas Day, New Year\'s Day and all other bank holidays. Accidents and breakdowns do not take holidays — neither do we.',
  },
  {
    question: 'Do you recover all types of vehicles?',
    answer:
      'We recover cars, vans, motorcycles, light commercial vehicles and specialist vehicles. We have flatbed and wheel-lift capability for all vehicle types, including all-wheel-drive and electric vehicles. For vehicles over 7.5 tonnes, we can arrange partner heavy recovery.',
  },
  {
    question: 'Will you work with my insurance company?',
    answer:
      'Yes, we work with all major UK insurance providers. We can liaise directly with your insurer, provide the necessary documentation and evidence for your claim, and ensure the recovery process supports rather than complicates your claim.',
  },
  {
    question: 'Do I need to pay upfront if I am making an insurance claim?',
    answer:
      'We require payment at the time of recovery. If the accident was not your fault, you should be able to recover these costs through your insurer. We provide full VAT receipts and documentation suitable for insurance claims. For non-fault accidents, we can also connect you with claims specialists who may be able to arrange cost recovery.',
  },
  {
    question: 'Can you recover my electric vehicle?',
    answer:
      'Yes — all EV recoveries use our flatbed vehicles, as specified by most manufacturers. Our operators are trained in EV-specific recovery procedures, including identifying battery damage warning signs and following manufacturer protocols. We cover Tesla, Nissan LEAF, BMW i-series, VW ID-series and all other EV models.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'Our primary coverage area is Central Scotland, including Glasgow, Edinburgh, Paisley, Hamilton, Motherwell, Livingston, Falkirk, Stirling, Ayr and Kilmarnock. We also cover Dumfries, Perth and surrounding areas. For longer distance needs, we offer UK-wide recovery capability.',
  },
  {
    question: 'How much does vehicle recovery cost?',
    answer:
      'Pricing depends on the type of recovery, vehicle, and distance involved. We provide transparent pricing before beginning any work — no hidden fees or surprise charges. Standard local recovery starts from £120. Motorway recovery, long distance and specialist recoveries are priced accordingly. Call us for a quote.',
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`border-b border-zinc-800 ${open ? 'border-orange-500/30' : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`font-heading font-bold text-base uppercase tracking-wide transition-colors ${open ? 'text-orange-500' : 'text-white group-hover:text-orange-400'}`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 ml-4 w-7 h-7 flex items-center justify-center border ${
            open ? 'border-orange-500 bg-orange-500/10' : 'border-zinc-700 group-hover:border-orange-500/50'
          } transition-colors`}
        >
          <svg className={`w-3.5 h-3.5 transition-colors ${open ? 'text-orange-500' : 'text-zinc-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-zinc-400 pb-5 leading-relaxed text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="section bg-zinc-950">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title mb-6">
              Common<br />
              <span className="text-orange-500">Questions</span>
            </h2>
            <p className="section-body mb-8">
              Can&apos;t find your answer here? Call us directly — we are always happy to talk.
            </p>
            <a href="tel:+447564016582" className="btn-primary text-sm">
              Call: +44 7564 016582
            </a>
          </div>

          {/* Right: Accordions */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
