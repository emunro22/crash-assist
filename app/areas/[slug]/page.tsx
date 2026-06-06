import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AreaPage from '@/components/AreaPage'
import { areas, getAreaBySlug } from '@/lib/areas-data'

export function generateStaticParams() {
  return areas.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) return {}
  return {
    title: `Vehicle Recovery in ${area.name}`,
    description: area.description,
  }
}

export default async function AreaSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) notFound()

  return (
    <>
      <Header />
      <main>
        <AreaPage area={area} />
      </main>
      <Footer />
    </>
  )
}
