/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        dmsans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#203271",
        secondary: "#9BEAE0",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

