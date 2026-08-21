import { areas } from './areas-data'

export type PostcodeDistrict = {
  code: string
  slug: string
  areaSlug: string
  areaName: string
}

// Derived from areas-data so the two lists can never drift out of sync.
export const postcodeDistricts: PostcodeDistrict[] = areas.flatMap((area) =>
  area.postcodes.map((code) => ({
    code,
    slug: code.toLowerCase(),
    areaSlug: area.slug,
    areaName: area.name,
  }))
)

export function getPostcodeBySlug(slug: string): PostcodeDistrict | undefined {
  return postcodeDistricts.find((p) => p.slug === slug.toLowerCase())
}

export function getPostcodesByArea(areaSlug: string): PostcodeDistrict[] {
  return postcodeDistricts.filter((p) => p.areaSlug === areaSlug)
}
