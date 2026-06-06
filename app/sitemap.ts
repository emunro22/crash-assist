import type { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'
import { areas } from '@/lib/areas-data'
import { getBlogPosts } from '@/lib/db'

const base = 'https://crashassistrecovery.co.uk'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogPosts: MetadataRoute.Sitemap = []
  try {
    const posts = await getBlogPosts(true)
    blogPosts = posts.map(p => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.updated_at),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch {}

  const serviceUrls: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const areaUrls: MetadataRoute.Sitemap = areas.map(a => ({
    url: `${base}/areas/${a.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    { url: base, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/areas`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/claims`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/work`, changeFrequency: 'monthly', priority: 0.6 },
    ...serviceUrls,
    ...areaUrls,
    ...blogPosts,
  ]
}
