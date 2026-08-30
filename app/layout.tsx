import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Schema from '@/components/Schema'
import WhatsAppButton from '@/components/WhatsAppButton'
import StickyCallBar from '@/components/StickyCallBar'
import CookieConsent from '@/components/CookieConsent'
import './globals.css'

const montserrat = Montserrat({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://glasgowbreakdownrecovery.co.uk'),
  title: {
    default: 'Glasgow Breakdown Recovery | 24/7 Vehicle Recovery',
    template: '%s | Glasgow Breakdown Recovery',
  },
  description:
    "Scotland's trusted 24/7 emergency vehicle recovery and accident assistance specialists. Fast response across Glasgow, Edinburgh and Central Scotland. Call us anytime, we never close.",
  keywords:
    'glasgow breakdown recovery, vehicle recovery Scotland, accident recovery Glasgow, breakdown recovery Scotland, 24 hour recovery, tow truck Glasgow, motorway recovery Scotland, emergency recovery',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Glasgow Breakdown Recovery | 24/7 Vehicle Recovery',
    description:
      "Scotland's trusted 24/7 emergency vehicle recovery and accident assistance specialists. Fast response across Glasgow, Edinburgh and Central Scotland.",
    type: 'website',
    locale: 'en_GB',
    siteName: 'Glasgow Breakdown Recovery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glasgow Breakdown Recovery | 24/7 Vehicle Recovery',
    description:
      "Scotland's trusted 24/7 emergency vehicle recovery and accident assistance specialists.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <Schema />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <StickyCallBar />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
