/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
          "fade-in": {
            "0%": { 
              opacity: '0%',
            },
            "100%": { 
              opacity: '100%' 
            },
            },
            "slide-down":{
              "0%": {
                margin: "-5rem",
              },
              "100%":{
                margin: "0rem"
              }
            },
        },
        animation: {
          "fade-in": "fade-in 1s",
          "slide-down":"slide-down 1s",
        },
    },
  },
  plugins: [],
}