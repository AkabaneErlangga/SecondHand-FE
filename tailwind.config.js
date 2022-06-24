/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'register': "url('~/public/assets/ImgLgn.png')"
      },
      colors: {
        darkblue05: "#4B1979",
        darkblue04: "#7126B5",
        darkblue03: "#A06ECE",
        darkblue02: "#D0B7E6",
        darkblue01: "#E2D4F0",
        whitegrey: "#EEEEEE",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
