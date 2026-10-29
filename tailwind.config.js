/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        cream: {
          50:  '#FBF8F2',
          100: '#F6F1E7',
          200: '#EDE5D4',
          300: '#E0D4BD',
        },
        // Ink — deep charcoal, not pure black
        ink: {
          DEFAULT: '#1A1714',
          900: '#1A1714',
          800: '#2A2521',
          700: '#3B342E',
          600: '#4F463E',
          500: '#6B6055',
          400: '#8B8074',
          300: '#ADA396',
        },
        // Brand accent — warm biscuit gold
        gold: {
          DEFAULT: '#B8893F',
          600: '#A77830',
          500: '#B8893F',
          400: '#C99F5C',
          200: '#E6D3AE',
          100: '#F0E3CB',
        },
        // Deep bordeaux — heritage accent
        wine: {
          DEFAULT: '#6B2A2A',
          700: '#5A2222',
          500: '#7D3636',
        },
        // Deep green — Nigerian / trust accent
        forest: {
          DEFAULT: '#2F4A3A',
          700: '#243A2D',
          500: '#3A5A47',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.94', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(26,23,20,0.04), 0 8px 24px -8px rgba(26,23,20,0.10)',
        lift: '0 2px 4px rgba(26,23,20,0.05), 0 18px 40px -16px rgba(26,23,20,0.18)',
        ring: '0 0 0 1px rgba(26,23,20,0.06)',
      },
      borderRadius: {
        'xl2': '1.25rem',
        'xl3': '1.75rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};