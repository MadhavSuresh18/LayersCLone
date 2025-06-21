/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        's':{'max':'450px'},
        'm':{'max':'750px'},
        'l':{'max':'1100px'},
      }
    },
  },
  plugins: [],
}