/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.glasgowbreakdownrecovery.co.uk' }],
        destination: 'https://glasgowbreakdownrecovery.co.uk/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
