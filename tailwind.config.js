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
        secondary: "#FFFFFF", 
        accent: "#EA580C",
        surface: "#ffffff",
        background: "#ffffff",
        success: "#00CC66",
        warning: "#FFAA00",
        error: "#FF3366",
        info: "#00AAFF"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}