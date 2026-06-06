import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Coverage from '@/components/Coverage'
import FAQ from '@/components/FAQ'
import CallbackForm from '@/components/CallbackForm'
import Footer from '@/components/Footer'

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
