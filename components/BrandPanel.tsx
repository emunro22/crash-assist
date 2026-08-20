import Image from 'next/image'

/** A generic branded placeholder used wherever we don't have a real photo — keeps every
 *  page honest (no unrelated stock photography) while still looking intentional. */
export default function BrandPanel({ className = '' }: { className?: string }) {
  return (
    <div className={`relative bg-zinc-900 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center p-10">
        <Image
          src="/brand/crash-assist-logo-web.png"
          alt="Crash Assist Recovery"
          width={400}
          height={344}
          className="w-2/5 max-w-[220px] h-auto opacity-90"
        />
      </div>
    </div>
  )
}
