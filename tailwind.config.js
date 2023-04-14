/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monserrat': ['Monserrat'],
        'poppins': ['Poppins'],
        "avenir": ['Avenir'],
        "bebas-neue": ['Bebas Neue'],
        "dm-sans": ['DM Sans'],
        "abril-fatface": ['Abril Fatface'],
        "grand-hotel": ['Grand Hotel'],
        "nekro-one": ['Nekro One']
      }
    },
  },
  plugins: [],
}

