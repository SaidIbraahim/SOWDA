/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3675b6",
        dark: "#09282d",
        neutral: "#80949d"
      },
      fontFamily: {
        sans: ['Open Sans', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 