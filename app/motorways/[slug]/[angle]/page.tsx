import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NearMeMotorwayPage from '@/components/NearMeMotorwayPage'
import { motorways, getMotorwayBySlug } from '@/lib/motorways-data'
import { motorwayNearMeAngles, getMotorwayAngleBySlug } from '@/lib/motorway-near-me-data'

const BASE = 'https://glasgowbreakdownrecovery.co.uk'

export function generateStaticParams() {
  return motorways.flatMap((m) => motorwayNearMeAngles.map((angle) => ({ slug: m.slug, angle: angle.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; angle: string }> }): Promise<Metadata> {
  const { slug, angle: angleSlug } = await params
  const motorway = getMotorwayBySlug(slug)
  const angle = getMotorwayAngleBySlug(angleSlug)
  if (!motorway || !angle) return {}
  const content = angle.build(motorway)
  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: `${BASE}/motorways/${motorway.slug}/${angle.slug}` },
  }
}

export default async function MotorwayAnglePage({ params }: { params: Promise<{ slug: string; angle: string }> }) {
  const { slug, angle: angleSlug } = await params
  const motorway = getMotorwayBySlug(slug)
  const angle = getMotorwayAngleBySlug(angleSlug)
  if (!motorway || !angle) notFound()

  const content = angle.build(motorway)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Motorways', item: `${BASE}/motorways` },
      { '@type': 'ListItem', position: 3, name: motorway.name, item: `${BASE}/motorways/${motorway.slug}` },
      { '@type': 'ListItem', position: 4, name: content.h1, item: `${BASE}/motorways/${motorway.slug}/${angle.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <NearMeMotorwayPage motorway={motorway} angleSlug={angle.slug} />
      </main>
      <Footer />
    </>
  )
}
