import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-barlow)', 'Barlow Condensed', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      colors: {
        brand: '#F97316',
      },
      animation: {
        ticker: 'ticker 35s linear infinite',
        'pulse-orange': 'pulse-orange 2.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-orange': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(249,115,22,0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(249,115,22,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
