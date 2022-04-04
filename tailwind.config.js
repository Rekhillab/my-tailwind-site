const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    //overrite tailwind
    extend: {
      //add on to the tailwind classes
      colors: {
         orange: colors.orange,
         teal: colors.teal,
         "light-blue": colors.lightBlue,    
      },

      fontFamily: {
        fun: ["Varela Round", "san-serif"]
      }
    },
  },
  plugins: [],
}