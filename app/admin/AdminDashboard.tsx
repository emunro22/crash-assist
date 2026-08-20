'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import BlogPostManager from './BlogPostManager'
import type { BlogPost, GalleryImage, Customer } from '@/lib/db'

type Tab = 'blog' | 'gallery' | 'customers'

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>('blog')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [images, setImages] = useState<GalleryImage[]>([])
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loggingOut, setLoggingOut] = useState(false)
  const router = useRouter()

  const [newCustomer, setNewCustomer] = useState({ name: '', phone: '', job_date: '', notes: '' })
  const [newImage, setNewImage] = useState({ title: '', tag: 'General', url: '' })

  const fetchPosts = useCallback(async () => {
    const r = await fetch('/api/admin/blog')
    if (r.ok) setPosts(await r.json())
  }, [])

  const fetchImages = useCallback(async () => {
    const r = await fetch('/api/admin/images')
    if (r.ok) setImages(await r.json())
  }, [])

  const fetchCustomers = useCallback(async () => {
    const r = await fetch('/api/admin/customers')
    if (r.ok) setCustomers(await r.json())
  }, [])

  useEffect(() => { fetchPosts() }, [fetchPosts])
  useEffect(() => { if (tab === 'gallery') fetchImages() }, [tab, fetchImages])
  useEffect(() => { if (tab === 'customers') fetchCustomers() }, [tab, fetchCustomers])

  const handleLogout = async () => {
    setLoggingOut(true)
    await fetch('/api/admin/logout', { method: 'POST' })
    router.refresh()
  }

  const handleAddImage = async () => {
    if (!newImage.url) return alert('Upload or enter an image URL first')
    await fetch('/api/admin/images', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newImage) })
    setNewImage({ title: '', tag: 'General', url: '' })
    fetchImages()
  }

  const handleDeleteImage = async (id: number) => {
    if (!confirm('Delete this image?')) return
    await fetch(`/api/admin/images/${id}`, { method: 'DELETE' })
    fetchImages()
  }

  const handleAddCustomer = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/admin/customers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newCustomer) })
    setNewCustomer({ name: '', phone: '', job_date: '', notes: '' })
    fetchCustomers()
  }

  const handleDeleteCustomer = async (id: number) => {
    if (!confirm('Delete this customer?')) return
    await fetch(`/api/admin/customers/${id}`, { method: 'DELETE' })
    fetchCustomers()
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Top bar */}
      <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 flex items-center justify-center font-heading font-black text-white text-sm">CA</div>
          <div className="font-heading font-black text-white uppercase text-sm">
            Crash Assist <span className="text-orange-500">Admin</span>
          </div>
        </div>
        <button onClick={handleLogout} disabled={loggingOut} className="admin-btn-secondary text-xs disabled:opacity-60">
          {loggingOut ? 'Signing out...' : 'Sign Out'}
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Blog Posts', value: posts.length, icon: '📝' },
            { label: 'Gallery Images', value: images.length, icon: '🖼️' },
            { label: 'Customers', value: customers.length, icon: '👥' },
          ].map(s => (
            <div key={s.label} className="bg-zinc-900 border border-zinc-800 p-4 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="font-heading font-black text-3xl text-orange-500">{s.value}</div>
              <div className="text-zinc-500 text-xs uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-800 mb-8">
          {(['blog', 'gallery', 'customers'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`admin-tab ${tab === t ? 'active' : ''}`}
            >
              {t === 'blog' ? '📝 Blog' : t === 'gallery' ? '🖼️ Gallery' : '👥 Customers'}
            </button>
          ))}
        </div>

        {/* Blog Tab */}
        {tab === 'blog' && (
          <BlogPostManager posts={posts} onRefresh={fetchPosts} />
        )}

        {/* Gallery Tab */}
        {tab === 'gallery' && (
          <div className="space-y-6">
            <h2 className="font-heading font-black text-xl text-white uppercase">Gallery ({images.length})</h2>

            {/* Add image form */}
            <div className="bg-zinc-900 border border-zinc-800 p-5 space-y-4">
              <h3 className="font-heading font-bold text-white uppercase text-sm">Add Image</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <label className="admin-label">Title</label>
                  <input className="admin-input" value={newImage.title} onChange={e => setNewImage(i => ({ ...i, title: e.target.value }))} placeholder="Accident recovery on M74" />
                </div>
                <div>
                  <label className="admin-label">Tag</label>
                  <select className="admin-input" value={newImage.tag} onChange={e => setNewImage(i => ({ ...i, tag: e.target.value }))}>
                    {['General', 'Glasgow', 'Edinburgh', 'Motorway', 'Accident', 'Flatbed', 'Motorcycle'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="admin-label">Image URL</label>
                  <input className="admin-input" placeholder="Paste image URL..." value={newImage.url} onChange={e => setNewImage(i => ({ ...i, url: e.target.value }))} />
                </div>
              </div>
              {newImage.url && <Image src={newImage.url} alt="preview" width={80} height={60} className="object-cover" />}
              <button onClick={handleAddImage} className="admin-btn-primary text-xs">Add Image</button>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {images.map(img => (
                <div key={img.id} className="relative group">
                  <Image src={img.url} alt={img.title || 'Gallery'} width={300} height={200} className="w-full aspect-video object-cover" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2">
                    <p className="text-white text-xs text-center truncate w-full">{img.title}</p>
                    <span className="badge text-xs">{img.tag}</span>
                    <button onClick={() => handleDeleteImage(img.id)} className="admin-btn-danger text-xs py-1 px-2">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customers Tab */}
        {tab === 'customers' && (
          <div className="space-y-6">
            <h2 className="font-heading font-black text-xl text-white uppercase">Customers ({customers.length})</h2>

            {/* Add customer form */}
            <form onSubmit={handleAddCustomer} className="bg-zinc-900 border border-zinc-800 p-5 space-y-4">
              <h3 className="font-heading font-bold text-white uppercase text-sm">Add Customer</h3>
              <div className="grid sm:grid-cols-4 gap-3">
                <div>
                  <label className="admin-label">Name</label>
                  <input className="admin-input" value={newCustomer.name} onChange={e => setNewCustomer(c => ({ ...c, name: e.target.value }))} placeholder="John Smith" />
                </div>
                <div>
                  <label className="admin-label">Phone *</label>
                  <input className="admin-input" required value={newCustomer.phone} onChange={e => setNewCustomer(c => ({ ...c, phone: e.target.value }))} placeholder="07700 000000" />
                </div>
                <div>
                  <label className="admin-label">Job Date *</label>
                  <input type="date" className="admin-input" required value={newCustomer.job_date} onChange={e => setNewCustomer(c => ({ ...c, job_date: e.target.value }))} />
                </div>
                <div>
                  <label className="admin-label">Notes</label>
                  <input className="admin-input" value={newCustomer.notes} onChange={e => setNewCustomer(c => ({ ...c, notes: e.target.value }))} placeholder="Recovery type..." />
                </div>
              </div>
              <button type="submit" className="admin-btn-primary text-xs">Add Customer</button>
            </form>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 text-left">
                    <th className="admin-label pb-3 font-semibold">Name</th>
                    <th className="admin-label pb-3 font-semibold">Phone</th>
                    <th className="admin-label pb-3 font-semibold">Job Date</th>
                    <th className="admin-label pb-3 font-semibold">Source</th>
                    <th className="admin-label pb-3 font-semibold">Notes</th>
                    <th className="pb-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {customers.map(c => (
                    <tr key={c.id} className="hover:bg-zinc-900/50">
                      <td className="py-3 text-white">{c.name || 'N/A'}</td>
                      <td className="py-3 text-zinc-300 font-mono text-xs">{c.phone}</td>
                      <td className="py-3 text-zinc-400 text-xs">{c.job_date}</td>
                      <td className="py-3">
                        <span className={`text-xs px-2 py-0.5 uppercase font-semibold ${c.source === 'whatsapp' ? 'bg-green-900/40 text-green-400' : 'bg-zinc-800 text-zinc-400'}`}>
                          {c.source}
                        </span>
                      </td>
                      <td className="py-3 text-zinc-500 text-xs max-w-[160px] truncate">{c.notes || 'N/A'}</td>
                      <td className="py-3">
                        <button onClick={() => handleDeleteCustomer(c.id)} className="admin-btn-danger text-xs py-1 px-2">Del</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {customers.length === 0 && (
                <p className="text-zinc-500 text-center py-8">No customers recorded yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
