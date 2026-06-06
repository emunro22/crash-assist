'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CallbackForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '', service: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', phone: '', message: '', service: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section bg-zinc-950">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">Get in Touch</div>
            <h2 className="section-title mb-6">
              Request a<br />
              <span className="text-orange-500">Callback</span>
            </h2>
            <p className="section-body mb-8">
              Not in immediate need but want to discuss your requirements? Fill out the form and a member of our team will call you back within 30 minutes during business hours.
            </p>
            <p className="section-body mb-10">
              For <strong className="text-white">emergencies</strong>, always call us directly on{' '}
              <a href="tel:08009991234" className="text-orange-500 font-bold hover:underline">0800 999 1234</a>.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📞', label: 'Emergency Line', value: '0800 999 1234', href: 'tel:08009991234' },
                { icon: '✉️', label: 'Email', value: 'info@crashassistrecovery.co.uk', href: 'mailto:info@crashassistrecovery.co.uk' },
                { icon: '🟢', label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/447700900123' },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 transition-colors group"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-zinc-500 text-xs uppercase tracking-wide">{c.label}</div>
                    <div className="text-white font-medium group-hover:text-orange-400 transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {status === 'success' ? (
              <div className="bg-zinc-900 border border-zinc-800 p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading text-2xl font-black text-white uppercase mb-3">Request Received</h3>
                <p className="text-zinc-400">We will call you back within 30 minutes. For emergencies, call 0800 999 1234.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-8 space-y-5">
                <h3 className="font-heading text-2xl font-black text-white uppercase mb-2">Callback Request</h3>

                <div>
                  <label className="admin-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="admin-input"
                  />
                </div>

                <div>
                  <label className="admin-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="07700 000000"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="admin-input"
                  />
                </div>

                <div>
                  <label className="admin-label">Service Required</label>
                  <select
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    className="admin-input"
                  >
                    <option value="">Select a service...</option>
                    <option value="Accident Recovery">Accident Recovery</option>
                    <option value="Breakdown Recovery">Breakdown Recovery</option>
                    <option value="Motorway Recovery">Motorway Recovery</option>
                    <option value="Flatbed Towing">Flatbed Towing</option>
                    <option value="Claims Assistance">Claims Assistance</option>
                    <option value="Motorcycle Recovery">Motorcycle Recovery</option>
                    <option value="Long Distance Recovery">Long Distance Recovery</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="admin-label">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your situation..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="admin-input resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Please call us directly on 0800 999 1234.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Request Callback'}
                </button>

                <p className="text-zinc-600 text-xs text-center">
                  For emergencies, call <a href="tel:08009991234" className="text-orange-500 hover:underline">0800 999 1234</a> directly.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
