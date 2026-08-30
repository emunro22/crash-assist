'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

const CONSENT_KEY = 'cookie-consent'
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [analyticsGranted, setAnalyticsGranted] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    if (stored === 'accepted') {
      setAnalyticsGranted(true)
    } else if (stored !== 'rejected') {
      setVisible(true)
    }
  }, [])

  function respond(choice: 'accepted' | 'rejected') {
    window.localStorage.setItem(CONSENT_KEY, choice)
    setAnalyticsGranted(choice === 'accepted')
    setVisible(false)
  }

  return (
    <>
      {analyticsGranted && GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {visible && (
        <div className="fixed bottom-0 inset-x-0 z-[60] bg-zinc-950 border-t border-zinc-800 shadow-[0_-8px_30px_rgba(0,0,0,0.4)]">
          <div className="container py-5 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-zinc-400 text-sm leading-relaxed flex-1">
              We use cookies to understand site traffic and improve our service. Read our{' '}
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                Privacy Policy
              </Link>{' '}
              to learn more.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => respond('rejected')}
                className="btn-outline text-xs py-2.5 px-5"
              >
                Reject
              </button>
              <button
                onClick={() => respond('accepted')}
                className="btn-primary text-xs py-2.5 px-5"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
