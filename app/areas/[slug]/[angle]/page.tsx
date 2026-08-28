import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NearMeAreaPage from '@/components/NearMeAreaPage'
import { areas, getAreaBySlug } from '@/lib/areas-data'
import { nearMeAngles, getAngleBySlug } from '@/lib/near-me-data'

const BASE = 'https://glasgowbreakdownrecovery.co.uk'

export function generateStaticParams() {
  return areas.flatMap((a) => nearMeAngles.map((angle) => ({ slug: a.slug, angle: angle.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; angle: string }> }): Promise<Metadata> {
  const { slug, angle: angleSlug } = await params
  const area = getAreaBySlug(slug)
  const angle = getAngleBySlug(angleSlug)
  if (!area || !angle) return {}
  const content = angle.build(area)
  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: `${BASE}/areas/${area.slug}/${angle.slug}` },
  }
}

export default async function AreaAnglePage({ params }: { params: Promise<{ slug: string; angle: string }> }) {
  const { slug, angle: angleSlug } = await params
  const area = getAreaBySlug(slug)
  const angle = getAngleBySlug(angleSlug)
  if (!area || !angle) notFound()

  const content = angle.build(area)
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
      { '@type': 'ListItem', position: 2, name: 'Areas', item: `${BASE}/areas` },
      { '@type': 'ListItem', position: 3, name: area.name, item: `${BASE}/areas/${area.slug}` },
      { '@type': 'ListItem', position: 4, name: content.h1, item: `${BASE}/areas/${area.slug}/${angle.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <NearMeAreaPage area={area} angleSlug={angle.slug} />
      </main>
      <Footer />
    </>
  )
}
