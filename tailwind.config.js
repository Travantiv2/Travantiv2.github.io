/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Helvetica', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji']
      },
      colors: {
        storm: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5b8ff',
          400: '#8b94ff',
          500: '#7c6aff',
          600: '#6d4eff',
          700: '#5b3bdb',
          800: '#4a2fb8',
          900: '#3d2596'
        },
        thunder: {
          50: '#fef7ee',
          100: '#fdecd7',
          200: '#fad5ae',
          300: '#f6b87a',
          400: '#f19344',
          500: '#ed7420',
          600: '#de5a16',
          700: '#b84315',
          800: '#923619',
          900: '#762e17'
        },
        lightning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        }
      }
    }
  },
  plugins: []
};
