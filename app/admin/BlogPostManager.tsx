'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { BlogPost } from '@/lib/db'

type Props = { posts: BlogPost[]; onRefresh: () => void }

const EMPTY = { title: '', slug: '', excerpt: '', content: '', category: 'Guides', published: false, cover_image_url: '' }

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function BlogPostManager({ posts, onRefresh }: Props) {
  const [editing, setEditing] = useState<BlogPost | null>(null)
  const [creating, setCreating] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [seeding, setSeeding] = useState(false)

  const openCreate = () => { setCreating(true); setEditing(null); setForm(EMPTY) }
  const openEdit = (p: BlogPost) => { setEditing(p); setCreating(false); setForm({ title: p.title, slug: p.slug, excerpt: p.excerpt, content: p.content, category: p.category, published: p.published, cover_image_url: p.cover_image_url ?? '' }) }
  const closeForm = () => { setCreating(false); setEditing(null) }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const res = await fetch('/api/admin/blog/upload-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      })
      const { url, uploadUrl } = await res.json()
      await fetch(uploadUrl, { method: 'PUT', body: file, headers: { 'Content-Type': file.type } })
      setForm(f => ({ ...f, cover_image_url: url }))
    } catch { alert('Upload failed') } finally { setUploading(false) }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      if (editing) {
        await fetch(`/api/admin/blog/${editing.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      } else {
        await fetch('/api/admin/blog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      }
      closeForm(); onRefresh()
    } catch { alert('Save failed') } finally { setSaving(false) }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this post permanently?')) return
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' })
    onRefresh()
  }

  const handleTogglePublish = async (p: BlogPost) => {
    await fetch(`/api/admin/blog/${p.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ published: !p.published }) })
    onRefresh()
  }

  const handleSeedBlog = async () => {
    if (!confirm('Seed 22 pre-written blog posts? Existing slugs will be skipped.')) return
    setSeeding(true)
    const res = await fetch('/api/admin/seed-blog', { method: 'POST' })
    const data = await res.json()
    alert(`Seeded ${data.inserted} posts (${data.skipped} skipped).`)
    setSeeding(false); onRefresh()
  }

  if (creating || editing) {
    return (
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-black text-xl text-white uppercase">{editing ? 'Edit Post' : 'New Post'}</h2>
          <button onClick={closeForm} className="text-zinc-400 hover:text-white text-sm">Cancel</button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="admin-label">Title *</label>
            <input className="admin-input" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value, slug: creating ? slugify(e.target.value) : f.slug }))} placeholder="Post title..." />
          </div>
          <div>
            <label className="admin-label">Slug *</label>
            <input className="admin-input" value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))} />
          </div>
        </div>

        <div>
          <label className="admin-label">Excerpt *</label>
          <textarea className="admin-input resize-none" rows={2} value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} placeholder="Short description..." />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="admin-label">Category</label>
            <input className="admin-input" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} />
          </div>
          <div className="flex items-center gap-3 pt-6">
            <input type="checkbox" id="published" checked={form.published} onChange={e => setForm(f => ({ ...f, published: e.target.checked }))} className="w-4 h-4 accent-orange-500" />
            <label htmlFor="published" className="text-zinc-300 text-sm">Published</label>
          </div>
        </div>

        <div>
          <label className="admin-label">Cover Image</label>
          <div className="flex gap-3 items-start">
            <input className="admin-input" placeholder="Image URL..." value={form.cover_image_url} onChange={e => setForm(f => ({ ...f, cover_image_url: e.target.value }))} />
            <label className="admin-btn-secondary whitespace-nowrap cursor-pointer">
              {uploading ? 'Uploading...' : 'Upload'}
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          </div>
          {form.cover_image_url && <Image src={form.cover_image_url} alt="cover" width={200} height={100} className="mt-2 object-cover" />}
        </div>

        <div>
          <label className="admin-label">Content (Markdown) *</label>
          <textarea className="admin-input resize-y font-mono text-xs" rows={16} value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} placeholder="# Heading&#10;&#10;Your content here..." />
        </div>

        <div className="flex gap-3">
          <button onClick={handleSave} disabled={saving} className="admin-btn-primary disabled:opacity-60">
            {saving ? 'Saving...' : (editing ? 'Save Changes' : 'Create Post')}
          </button>
          <button onClick={closeForm} className="admin-btn-secondary">Cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="font-heading font-black text-xl text-white uppercase">Blog Posts ({posts.length})</h2>
        <div className="flex gap-2 flex-wrap">
          <button onClick={handleSeedBlog} disabled={seeding} className="admin-btn-secondary text-xs disabled:opacity-60">
            {seeding ? 'Seeding...' : '🌱 Seed 22 Posts'}
          </button>
          <button onClick={openCreate} className="admin-btn-primary text-xs">+ New Post</button>
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="text-zinc-500 py-8 text-center">No blog posts yet. Create one or use the seed button.</p>
      ) : (
        <div className="space-y-2">
          {posts.map(p => (
            <div key={p.id} className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors">
              {p.cover_image_url && (
                <Image src={p.cover_image_url} alt={p.title} width={60} height={40} className="object-cover flex-shrink-0 hidden sm:block" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-xs font-semibold uppercase px-2 py-0.5 ${p.published ? 'bg-green-900/40 text-green-400' : 'bg-zinc-800 text-zinc-500'}`}>
                    {p.published ? 'Published' : 'Draft'}
                  </span>
                  <span className="badge text-xs">{p.category}</span>
                </div>
                <h3 className="text-white text-sm font-semibold truncate">{p.title}</h3>
                <p className="text-zinc-600 text-xs truncate">/blog/{p.slug}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => handleTogglePublish(p)} className="admin-btn-secondary text-xs py-1 px-3">
                  {p.published ? 'Unpublish' : 'Publish'}
                </button>
                <button onClick={() => openEdit(p)} className="admin-btn-secondary text-xs py-1 px-3">Edit</button>
                <button onClick={() => handleDelete(p.id)} className="admin-btn-danger text-xs py-1 px-3">Del</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
