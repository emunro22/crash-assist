import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Schema from '@/components/Schema'
import WhatsAppButton from '@/components/WhatsAppButton'
import StickyCallBar from '@/components/StickyCallBar'
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
  metadataBase: new URL('https://crashassistrecovery.co.uk'),
  title: {
    default: 'Crash Assist Recovery | 24/7 Emergency Vehicle Recovery Scotland',
    template: '%s | Crash Assist Recovery',
  },
  description:
    "Scotland's trusted 24/7 emergency vehicle recovery and accident assistance specialists. Fast response across Glasgow, Edinburgh and Central Scotland. Call us anytime — we never close.",
  keywords:
    'crash assist recovery, vehicle recovery Scotland, accident recovery Glasgow, breakdown recovery Scotland, 24 hour recovery, tow truck Glasgow, motorway recovery Scotland, emergency recovery',
  openGraph: {
    title: 'Crash Assist Recovery | 24/7 Emergency Vehicle Recovery Scotland',
    description:
      "Scotland's trusted 24/7 emergency vehicle recovery and accident assistance specialists. Fast response across Glasgow, Edinburgh and Central Scotland.",
    type: 'website',
    locale: 'en_GB',
    siteName: 'Crash Assist Recovery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crash Assist Recovery | 24/7 Emergency Vehicle Recovery Scotland',
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
        <Analytics />
      </body>
    </html>
  )
}
