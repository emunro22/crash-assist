import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MotorwayPage from '@/components/MotorwayPage'
import { motorways, getMotorwayBySlug } from '@/lib/motorways-data'

export function generateStaticParams() {
  return motorways.map(m => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const motorway = getMotorwayBySlug(slug)
  if (!motorway) return {}
  return {
    title: `Recovery on the ${motorway.name}`,
    description: motorway.description,
    alternates: { canonical: `/motorways/${motorway.slug}` },
  }
}

export default async function MotorwaySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const motorway = getMotorwayBySlug(slug)
  if (!motorway) notFound()

  return (
    <>
      <Header />
      <main>
        <MotorwayPage motorway={motorway} />
      </main>
      <Footer />
    </>
  )
}
