import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms and conditions that apply when you use Glasgow Breakdown Recovery for vehicle recovery, towing or accident claims assistance.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-36 pb-10 bg-zinc-950">
          <div className="container">
            <div className="section-tag">Legal</div>
            <h1 className="section-title mb-4">
              Terms of<br />
              <span className="text-blue-500">Service</span>
            </h1>
            <p className="section-body max-w-xl">Last updated: 30 August 2026</p>
          </div>
        </section>

        <section className="section bg-zinc-950">
          <div className="container max-w-3xl prose-crash">
            <p>
              These terms apply whenever you request or use vehicle recovery, towing or accident claims
              assistance services from Glasgow Breakdown Recovery Limited (Company No. SC870113),
              registered in Scotland (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By requesting a service by phone, WhatsApp or
              through our website, you agree to these terms.
            </p>

            <h2>Our services</h2>
            <p>
              We provide 24/7 breakdown recovery, accident recovery, motorway recovery, flatbed towing,
              motorcycle recovery and accident claims assistance across Glasgow, Edinburgh and Central
              Scotland, with UK-wide recovery available on request. Estimated response times given on
              our website or by phone are estimates only and may vary due to traffic, weather, location
              and demand.
            </p>

            <h2>Pricing and payment</h2>
            <p>
              We provide pricing before beginning work wherever practicable. Prices depend on the type of
              recovery, vehicle, distance and any specialist equipment required. Payment is due at the
              time of recovery unless we have separately agreed to invoice your insurer directly. We
              accept the payment methods stated to you at the time of booking. A full VAT receipt is
              provided for every job.
            </p>

            <h2>Cancellations</h2>
            <p>
              You may cancel a booked recovery at any time before we arrive at your location free of
              charge, unless our vehicle has already been dispatched, in which case a reasonable
              call-out charge may apply to cover costs already incurred.
            </p>

            <h2>Your responsibilities</h2>
            <ul>
              <li>Provide an accurate location, vehicle description and description of the fault or incident</li>
              <li>Ensure, so far as reasonably possible, that the vehicle and the area around it are safe for our operators to access</li>
              <li>Remove or secure valuables and personal belongings from the vehicle before recovery, where safe and possible to do so</li>
              <li>Provide accurate details of your insurer where the recovery relates to an insurance claim</li>
            </ul>

            <h2>Liability</h2>
            <p>
              We take reasonable care when recovering, loading and transporting your vehicle, and we are
              fully insured. We are liable for direct loss or damage to your vehicle caused by our
              negligence during recovery. We are not liable for pre-existing damage, mechanical faults
              unrelated to the recovery, or loss of personal belongings left in the vehicle. Nothing in
              these terms limits our liability for death or personal injury caused by our negligence, or
              for fraud.
            </p>

            <h2>Accident claims assistance</h2>
            <p>
              Where we introduce you to a claims specialist or solicitor following a non-fault accident,
              that introduction does not itself create a solicitor-client or advisory relationship with
              us. Any claims handling or legal advice is provided directly by the relevant third-party
              specialist under their own terms.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the law of Scotland, and any disputes will be subject to the
              exclusive jurisdiction of the Scottish courts.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to{' '}
              <a href="mailto:info@glasgowbreakdownrecovery.co.uk" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                info@glasgowbreakdownrecovery.co.uk
              </a>{' '}
              or by phone on{' '}
              <a href="tel:+447564016582" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                +44 7564 016582
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
