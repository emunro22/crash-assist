import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const Ticker = dynamic(() => import('@/components/Ticker'))
const Services = dynamic(() => import('@/components/Services'))
const About = dynamic(() => import('@/components/About'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const Coverage = dynamic(() => import('@/components/Coverage'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const CallbackForm = dynamic(() => import('@/components/CallbackForm'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <Testimonials />
        <Coverage />
        <FAQ />
        <CallbackForm />
      </main>
      <Footer />
    </>
  )
}
