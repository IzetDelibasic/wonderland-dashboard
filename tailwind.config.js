module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false,
   theme: {
     extend: {
      fontFamily: {
        workSans: 'Work Sans',
        montserrat: 'Montserrat'
      },
      colors:{
        bluePurple: "#9272CF",
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }