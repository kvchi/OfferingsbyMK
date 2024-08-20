/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#efb577",
        secondary:"#FBF6E2",
        dark: "#1A2130",
        yell: "#E7D37F"
    },
    },
  },
  plugins: [],
}