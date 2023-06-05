/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'dashboard' : 'url(../src/img/bg-dashboard.png)',
        'logreg' : 'url(../src/img/bground.png)',
        'maps' : 'url(../src/img/maps.png)'
      }
    },
  },
  plugins: [],
}

