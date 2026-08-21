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
        brand: '#1172E7',
        // Override Tailwind's built-in orange scale with the logo's safety-stripe
        // orange so every existing orange-* utility class picks up the brand colour.
        orange: {
          50: '#FFF4E5',
          100: '#FFE3BF',
          200: '#FFC780',
          300: '#FFA83D',
          400: '#FD9812',
          500: '#F7900A',
          600: '#D97600',
          700: '#B25F00',
          800: '#8A4A00',
          900: '#5C3200',
          950: '#3A2000',
        },
        // Override Tailwind's built-in blue scale with the logo's Glasgow-skyline
        // navy/blue so every existing blue-* utility class picks up the brand colour.
        blue: {
          50: '#EAF2FE',
          100: '#CFE2FD',
          200: '#9FC5FB',
          300: '#64A2F5',
          400: '#337EEC',
          500: '#1172E7',
          600: '#0B57B8',
          700: '#0A3F8C',
          800: '#0A2E5C',
          900: '#071F3E',
          950: '#041329',
        },
      },
      animation: {
        ticker: 'ticker 35s linear infinite',
        'pulse-orange': 'pulse-orange 2.5s ease-in-out infinite',
        'pulse-blue': 'pulse-blue 2.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-orange': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(247,144,10,0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(247,144,10,0)' },
        },
        'pulse-blue': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(17,114,231,0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(17,114,231,0)' },
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
