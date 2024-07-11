/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#F53850",
      },
      fontFamily:{
         custom : ["Dancing Script"],
         heading: ["Bitter"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.3))',
      },
    },
  },
  plugins: [],
}

