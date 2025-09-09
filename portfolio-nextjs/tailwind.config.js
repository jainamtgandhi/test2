/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#2563EB',
          700: '#1D4ED8',
        },
        accent: '#F59E0B',
        surface: '#0B1220',
        'card-surface': '#0F172A',
        'text-primary': '#E5E7EB',
        'text-secondary': '#9CA3AF',
        'border': '#1F2937',
        'page-bg': '#0B1020',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 5vw, 3.5rem)', { lineHeight: '1.2' }],
        'h1': ['clamp(2.75rem, 5vw, 3.5rem)', { lineHeight: '1.4' }],
        'h2': ['2rem', { lineHeight: '1.4' }],
        'h3': ['1.5rem', { lineHeight: '1.4' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
