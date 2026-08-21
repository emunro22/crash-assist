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
        // Override Tailwind's built-in orange scale with a deep royal blue so
        // every existing orange-* utility class (CTAs, urgency/live indicators)
        // picks up a dark-blue action colour instead. Kept distinct from the
        // brighter `blue` scale below, which is used for structural/decorative
        // accents, so the two still read as different tones.
        orange: {
          50: '#EAF0FB',
          100: '#CBDCF5',
          200: '#97B9EA',
          300: '#6396DE',
          400: '#3A76CC',
          500: '#2158C4',
          600: '#1A46A0',
          700: '#15397F',
          800: '#102C61',
          900: '#0A1D40',
          950: '#061224',
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
        ticker: 'ticker 16s linear infinite',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(33,88,196,0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(33,88,196,0)' },
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
