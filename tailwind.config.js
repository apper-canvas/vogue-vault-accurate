/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend: {
colors: {
        primary: "#EF4444",
        secondary: "#FEFEFE", 
        accent: "#F87171",
        surface: "#FAFAFA",
        background: "#FDFDFD",
        success: "#A7E6C7",
        warning: "#F5D5AE",
        error: "#F5B5B5",
        info: "#B3D4F1"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}