import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallbackForm from '@/components/CallbackForm'

export const metadata: Metadata = {
  title: 'Accident Claims Assistance',
  description: 'Expert accident claims assistance after a road traffic accident in Scotland. We guide you through the insurance process. No win no fee available.',
  alternates: { canonical: '/claims' },
}

const steps = [
  { step: '01', title: 'Contact Us', desc: 'Call or complete the form below. Tell us about your accident.' },
  { step: '02', title: 'Free Consultation', desc: 'A claims specialist will assess your situation and explain your options.' },
  { step: '03', title: 'We Handle Everything', desc: 'We liaise with insurers and solicitors on your behalf.' },
  { step: '04', title: 'You Get Paid', desc: 'Receive fair compensation for your vehicle damage and any injuries.' },
]

export default function ClaimsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-16 bg-zinc-950">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="section-tag">Accident Claims</div>
                <h1 className="section-title mb-6">
                  We Fight For<br />
                  <span className="text-blue-500">Your</span><br />
                  Compensation
                </h1>
                <p className="section-body mb-8">
                  Been in an accident that was not your fault? You deserve proper compensation.
                  Our expert claims team handles every step, from documentation to settlement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+447564016582" className="btn-primary">Start Your Claim</a>
                  <a href="#form" className="btn-outline">Free Consultation</a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-zinc-800">
                {[
                  { value: '£0', label: 'Upfront Cost', sub: 'No win no fee' },
                  { value: '100%', label: 'Free Consult', sub: 'No obligation' },
                  { value: '95%', label: 'Success Rate', sub: 'Of claims assessed' },
                  { value: '6wks', label: 'Avg Settlement', sub: 'For clear cases' },
                ].map(s => (
                  <div key={s.label} className="bg-zinc-950 p-6 text-center">
                    <div className="font-heading text-4xl font-black text-blue-500 leading-none">{s.value}</div>
                    <div className="text-white text-sm font-semibold mt-1">{s.label}</div>
                    <div className="text-zinc-500 text-xs">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section" style={{ backgroundColor: '#111111' }}>
          <div className="container">
            <div className="text-center mb-14">
              <div className="section-tag justify-center">The Process</div>
              <h2 className="section-title">
                How Claims<br />
                <span className="text-blue-500">Work</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
              {steps.map((s, i) => (
                <div key={s.step} className="bg-zinc-950 p-6 relative">
                  <div className="font-heading text-5xl font-black text-blue-500/20 leading-none mb-4">{s.step}</div>
                  <h3 className="font-heading font-black text-white uppercase text-lg mb-3">{s.title}</h3>
                  <p className="text-zinc-500 text-sm">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-blue-500 rotate-45 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you can claim */}
        <section className="section bg-zinc-950">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="section-tag">What You Can Claim</div>
                <h2 className="section-title mb-6">
                  Your<br />
                  <span className="text-blue-500">Entitlements</span>
                </h2>
                <p className="section-body">
                  If you were injured or suffered losses in an accident that was not your fault,
                  you may be entitled to compensation for all of the following:
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Vehicle repair or replacement',
                  'Personal injury compensation',
                  'Loss of earnings',
                  'Medical expenses',
                  'Hire car costs',
                  'Travel expenses',
                  'Pain and suffering',
                  'Future loss of earnings',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 p-3">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <div id="form">
          <CallbackForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
