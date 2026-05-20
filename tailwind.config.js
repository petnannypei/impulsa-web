/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aqua: {
          50: '#E4F3F5',
          100: '#C4E7EC',
          200: '#95D5DE',
          500: '#3A9DA6',
          700: '#267880',
        },
        brand: {
          DEFAULT: '#2B6478',
          dark: '#1E4D5E',
        },
        steel: '#ADBEC8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
