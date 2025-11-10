/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend: {
      colors: {
        primary: "#b4a7d6",
        secondary: "#f8f9fa", 
        accent: "#a8c8ec",
        surface: "#ffffff",
        background: "#fefcf8",
        success: "#a7d3c7",
        warning: "#f2c4a3",
        error: "#e8a5a5",
        info: "#a5c9ea"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}