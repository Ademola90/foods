/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  prefix: "tw-",
  theme: {
  extend: {

      backgroundImage: {
        'food-pattern': "url('')",
        
      }
    },
  },
  plugins: [],
}

