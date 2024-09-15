/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      fontSize: {
        'custom-size': '76.29px',
      },
      lineHeight: {
        'custom-line': '83.92px',
      },
      letterSpacing: {
        'tight-custom': '-0.04em',
      },
      colors:{
        'button-blue': '#0147FF',
        'app-bg': '#F7F7F7'
      }
    },
  },
  plugins: [],
}