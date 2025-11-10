/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
extend: {
colors: {
        primary: "#C4B5FD",
        secondary: "#FEF3E2", 
        accent: "#F8BBD9",
        surface: "#F0FDF4",
        background: "#FEFEFE",
        success: "#BBF7D0",
        warning: "#FED7AA",
        error: "#FECACA",
        info: "#BFDBFE"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}