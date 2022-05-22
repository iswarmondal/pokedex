const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "slate": colors.slate,
      "amber": colors.amber,
      "teal": colors.teal,
      "indigo": colors.indigo
    },
    extend: {
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, 150px)',
      },
      backgroundImage:{
        'pokeball': "url('/src/assets/SeekPng.png')"
      }
    },
  },
  plugins: [],
}
