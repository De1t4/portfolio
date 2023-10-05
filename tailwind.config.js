/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          "fade-in-y": {
            "0%": { opacity: 0, transform: "translateY(25px)" },
            "100%": { opacity: 1, transform: "translateY(0px)" },
            },
        },
        animation: {
          "fade-in-y": "fade-in-y 1s linear",
        },
    },
  },
  plugins: [],
}