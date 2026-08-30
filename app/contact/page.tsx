import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallbackForm from '@/components/CallbackForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Get in touch with Glasgow Breakdown Recovery. Available 24/7 for emergency vehicle recovery across Scotland. Call +44 7564 016582.",
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-36 pb-10 bg-zinc-950">
          <div className="container">
            <div className="section-tag">Get in Touch</div>
            <h1 className="section-title mb-4">
              Contact<br />
              <span className="text-blue-500">Our Team</span>
            </h1>
            <p className="section-body max-w-xl">
              Whether you need immediate emergency assistance or want to discuss your requirements,
              we are always ready to help.
            </p>
          </div>
        </section>
        <CallbackForm />
      </main>
      <Footer />
    </>
  )
}
