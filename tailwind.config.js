/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors:{
        "primary-white":"#fcfbfe",
        "primary-blue":"#002e5d",
        "primary-blue-pale":"#103360",
        "primary-red":"#dd253a",
        "primary-red-pale":"#e9354c"
      },
      fontFamily:{
        "display":['Bakbak One', 'cursive']
      }
    },
  },
  plugins: [],
}
