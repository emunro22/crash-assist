import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const About = dynamic(() => import('@/components/About'))

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Glasgow Breakdown Recovery Limited (Company No. SC870113) — Scotland's 24/7 vehicle recovery and accident assistance specialists, serving Glasgow, Edinburgh and Central Scotland since 2009.",
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-36 pb-10 bg-zinc-950">
          <div className="container">
            <div className="section-tag">About Us</div>
            <h1 className="section-title mb-4">
              Who We<br />
              <span className="text-blue-500">Are</span>
            </h1>
            <p className="section-body max-w-xl">
              Glasgow Breakdown Recovery Limited is a Scotland-registered vehicle recovery company
              (Company No. SC870113) providing 24/7 emergency breakdown and accident recovery across
              Glasgow, Edinburgh and Central Scotland. We are fully insured, our operators are trained
              and certified, and we work directly with all major UK insurance providers to keep the
              recovery process simple for our customers.
            </p>
          </div>
        </section>
        <About />
        <section className="section bg-zinc-950">
          <div className="container max-w-3xl">
            <h2 className="font-heading text-3xl font-black text-white uppercase mb-6">
              How We <span className="text-blue-500">Operate</span>
            </h2>
            <div className="prose-crash">
              <p>
                We run a 24-hour dispatch operation, 365 days a year, including Christmas Day and every
                bank holiday. Every call is answered by a member of our team, not an automated queue,
                and we dispatch the nearest available recovery vehicle immediately.
              </p>
              <p>
                Our fleet covers flatbed and wheel-lift recovery for cars, vans, motorcycles and electric
                vehicles, and our operators follow manufacturer-specific procedures for EV recovery,
                including battery safety checks. For accidents, we liaise directly with the police,
                your insurer, and your chosen repair garage, and provide the documentation and evidence
                photography insurers require to support a claim.
              </p>
              <p>
                Pricing is agreed and confirmed before any work begins, with no hidden fees. Full VAT
                receipts are issued for every job. Read more in our{' '}
                <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  Terms of Service
                </a>
                , or{' '}
                <a href="/contact" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  get in touch
                </a>{' '}
                with any questions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
