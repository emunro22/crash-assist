'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) throw new Error()
      router.refresh()
    } catch {
      setError('Invalid password. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="w-10 h-10 bg-orange-500 flex items-center justify-center font-heading font-black text-white">CA</div>
          <div className="font-heading font-black uppercase leading-none">
            <span className="text-white text-lg">Crash Assist</span>
            <br />
            <span className="text-orange-500 text-xs tracking-widest">RECOVERY ADMIN</span>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8">
          <h1 className="font-heading font-black text-2xl text-white uppercase mb-1">Admin Portal</h1>
          <p className="text-zinc-500 text-sm mb-8">Enter your password to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="admin-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoFocus
                className="admin-input"
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="admin-btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-zinc-700 text-xs mt-6">
          Crash Assist Recovery: Admin Portal
        </p>
      </div>
    </div>
  )
}
