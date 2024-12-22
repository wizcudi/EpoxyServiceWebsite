/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'color60':"#fffffc",
        'color30':"#000000",

        'color10a':"#DAA520",
        'color10b':"#",
        'color10c':"#",
      },
      screens: {

        'w1000': {'max': '1000px'},
        'w900': {'max': '900px'},
        'w800': {'max': '800px'},
        'w750': {'max': '750px'},
        'w700': {'max': '700px'},
        'w600': {'max': '600px'},
        'w500': {'max': '500px'},
        'w450': {'max': '450px'},
        'w400': {'max': '400px'},
        'w350': {'max': '350px'},

        
      }
    },
  },
  plugins: [],
}

