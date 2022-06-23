/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'register': "url('~/public/assets/ImgLgn.png')"
      }
    },
  },
  plugins: [],
}
