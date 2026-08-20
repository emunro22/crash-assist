import fs from 'fs'
import path from 'path'

export type StaticGalleryImage = {
  id: string
  url: string
  title: string
  tag: string
}

const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery')
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

function titleFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, '')
  const cleaned = base.replace(/[-_]+/g, ' ').trim()
  // Filenames that are just numbers/uuids/hashes don't make a useful title
  if (!cleaned || /^[0-9a-f-]{6,}$/i.test(cleaned)) return 'Recovery in Action'
  return cleaned.replace(/\b\w/g, (c) => c.toUpperCase())
}

/** Reads every image dropped into /public/gallery — no renaming or DB entry required. */
export function getStaticGalleryImages(): StaticGalleryImage[] {
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(GALLERY_DIR, { withFileTypes: true })
  } catch {
    return []
  }

  const files = entries
    .filter((e) => e.isFile() && IMAGE_EXT.has(path.extname(e.name).toLowerCase()))
    .map((e) => {
      const fullPath = path.join(GALLERY_DIR, e.name)
      const stat = fs.statSync(fullPath)
      return { name: e.name, mtime: stat.mtimeMs }
    })
    .sort((a, b) => b.mtime - a.mtime)

  return files.map((f, i) => ({
    id: f.name,
    url: `/gallery/${f.name}`,
    title: titleFromFilename(f.name),
    tag: i === 0 ? 'Latest' : 'Recovery',
  }))
}
