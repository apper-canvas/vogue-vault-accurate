/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#f5f5f5", 
        accent: "#3b82f6",
        surface: "#ffffff",
        background: "#fafafa",
        success: "#0d9488",
        warning: "#f77f00",
        error: "#c1121f",
        info: "#1d4ed8"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}