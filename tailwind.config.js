/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2540', // Deep sophisticated blue
          light: '#1A3B5C',
          dark: '#051220',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Vibrant blue for actions
          hover: '#2563EB',
        },
        accent: {
          DEFAULT: '#F59E0B', // Warm accent
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'], // For headers to look more modern
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'premium': '0 10px 40px -10px rgba(0,0,0,0.08)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
