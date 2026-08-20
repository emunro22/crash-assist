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
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: '#DE1415',
        // Override Tailwind's built-in orange scale with the logo's red so every
        // existing orange-* utility class picks up the brand colour automatically.
        orange: {
          50: '#FDEDED',
          100: '#FBD2D2',
          200: '#F7A8A8',
          300: '#F17979',
          400: '#E9494A',
          500: '#DE1415',
          600: '#B80F10',
          700: '#920C0D',
          800: '#6C090A',
          900: '#470506',
          950: '#2B0303',
        },
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(222,20,21,0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(222,20,21,0)' },
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
