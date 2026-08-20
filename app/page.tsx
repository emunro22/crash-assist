import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'

const Ticker = dynamic(() => import('@/components/Ticker'))
const About = dynamic(() => import('@/components/About'))
const Services = dynamic(() => import('@/components/Services'))
const Pricing = dynamic(() => import('@/components/Pricing'))
const CallbackForm = dynamic(() => import('@/components/CallbackForm'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const CoverageMap = dynamic(() => import('@/components/CoverageMap'))
const Coverage = dynamic(() => import('@/components/Coverage'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <CallbackForm />
        <FAQ />
        <CoverageMap />
        <Coverage />
      </main>
      <Footer />
    </>
  )
}
