/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
extend: {
colors: {
        primary: "#DC2626",
        secondary: "#FEE2E2", 
        accent: "#EF4444",
        surface: "#FEF2F2",
        background: "#FEFEFE",
        success: "#FEE2E2",
        warning: "#FED7D7",
        error: "#FCA5A5",
        info: "#FCE7F3"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}