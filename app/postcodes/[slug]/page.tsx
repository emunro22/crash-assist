import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostcodePage from '@/components/PostcodePage'
import { postcodeDistricts, getPostcodeBySlug } from '@/lib/postcodes-data'
import { getAreaBySlug } from '@/lib/areas-data'

export function generateStaticParams() {
  return postcodeDistricts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const postcode = getPostcodeBySlug(slug)
  if (!postcode) return {}
  return {
    title: `Vehicle Recovery in ${postcode.code}`,
    description: `24/7 emergency vehicle recovery and accident assistance covering the ${postcode.code} postcode district in ${postcode.areaName}.`,
    alternates: { canonical: `/postcodes/${postcode.slug}` },
  }
}

export default async function PostcodeSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postcode = getPostcodeBySlug(slug)
  if (!postcode) notFound()
  const area = getAreaBySlug(postcode.areaSlug)
  if (!area) notFound()

  return (
    <>
      <Header />
      <main>
        <PostcodePage postcode={postcode} area={area} />
      </main>
      <Footer />
    </>
  )
}
