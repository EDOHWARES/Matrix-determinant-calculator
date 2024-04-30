/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#001f3f',
        gold: '#ffd700',
        lightGray: '#cccccc'
      }
    },
  },
  plugins: [],
}

