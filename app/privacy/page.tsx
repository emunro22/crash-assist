import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Glasgow Breakdown Recovery collects, uses and protects your personal data, including our use of cookies and analytics.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-36 pb-10 bg-zinc-950">
          <div className="container">
            <div className="section-tag">Legal</div>
            <h1 className="section-title mb-4">
              Privacy<br />
              <span className="text-blue-500">Policy</span>
            </h1>
            <p className="section-body max-w-xl">Last updated: 30 August 2026</p>
          </div>
        </section>

        <section className="section bg-zinc-950">
          <div className="container max-w-3xl prose-crash">
            <p>
              Glasgow Breakdown Recovery Limited (Company No. SC870113), registered in Scotland
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), is the data controller for the personal data described in
              this policy. We are committed to protecting your privacy and handling your data in
              accordance with the UK General Data Protection Regulation (UK GDPR) and the Data
              Protection Act 2018.
            </p>

            <h2>Who we are</h2>
            <p>
              You can contact us about any privacy matter at{' '}
              <a href="mailto:info@glasgowbreakdownrecovery.co.uk" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                info@glasgowbreakdownrecovery.co.uk
              </a>{' '}
              or by phone on{' '}
              <a href="tel:+447564016582" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                +44 7564 016582
              </a>
              .
            </p>

            <h2>Information we collect</h2>
            <p>We collect personal data when you:</p>
            <ul>
              <li>Call us or submit a callback/contact form request</li>
              <li>Request a vehicle recovery or accident claims service</li>
              <li>Contact us via WhatsApp or email</li>
              <li>Browse our website (via cookies and similar technologies, see below)</li>
            </ul>
            <p>
              This may include your name, phone number, email address, vehicle details, location and,
              where relevant to an accident recovery or claim, details of the incident and your
              insurance provider.
            </p>

            <h2>How we use your information</h2>
            <ul>
              <li>To dispatch and provide recovery and towing services</li>
              <li>To communicate with you about your job or enquiry, including via WhatsApp where you have contacted us that way</li>
              <li>To liaise with insurers, garages and, where necessary, the police on your behalf</li>
              <li>To send invoices and process payment</li>
              <li>To improve our website and services, using aggregated, anonymised analytics data</li>
              <li>To comply with our legal and accounting obligations</li>
            </ul>

            <h2>Legal basis for processing</h2>
            <p>
              We process your data on the basis of: performance of a contract (providing the recovery
              service you have requested), legitimate interests (responding to enquiries, improving our
              service), consent (non-essential cookies and analytics, and marketing communications where
              applicable), and legal obligation (accounting and tax records).
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              Our website uses cookies. Strictly necessary cookies are used to operate core site
              functionality and do not require consent. Analytics cookies, which help us understand how
              visitors use the site, are only set after you accept them via the cookie banner shown on
              your first visit. You can withdraw consent at any time by clearing your browser&apos;s local
              storage for this site or contacting us. We may use privacy-conscious analytics tools and,
              where enabled, Google Analytics.
            </p>

            <h2>Sharing your information</h2>
            <p>
              We share information with insurers, garages, breakdown partners and claims specialists
              only where necessary to deliver the service you have requested, and with service providers
              who support our operations (such as email, hosting and payment providers) under
              appropriate confidentiality and data processing terms. We do not sell your personal data.
            </p>

            <h2>How long we keep your data</h2>
            <p>
              We retain job and invoicing records for as long as required by UK tax law (normally six
              years), and enquiry data for as long as reasonably needed to respond to you, after which it
              is deleted or anonymised.
            </p>

            <h2>Your rights</h2>
            <p>
              Under UK GDPR you have the right to access, correct, delete or restrict the use of your
              personal data, to object to certain processing, and to data portability. To exercise any of
              these rights, contact us using the details above. You also have the right to complain to
              the Information Commissioner&apos;s Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                ico.org.uk
              </a>
              .
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The &quot;last updated&quot; date at the top of this
              page shows when it was last revised.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
