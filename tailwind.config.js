/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
        'roboto-condensed': ["'Roboto Condensed'"],
        'bebas': ['"Bebas Neue"'],
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