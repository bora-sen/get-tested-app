/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#fcfbfe",
        "primary-blue": "#38dbff",
        "primary-blue-pale": "#38dbff60",
        "primary-blue-darker": "#22b3d3",
        "primary-red": "#ff5d5d",
        "primary-red-pale": "#e9354c",
        "primary-green": "#00ff75",
        "primary-black": "#000",
        "primary-yellow":"#fee432"
      },
      fontFamily: {
        display: ["Bakbak One", "cursive"],
      },
      backgroundImage:{
        "landing-main":"url(https://images2.alphacoders.com/304/3042.png)"
      }
    },
  },
  plugins: [],
}
