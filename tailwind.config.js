/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dandrea-blue': '#1e3a8a', // Tu color azul de siempre
      },
    },
  },
  plugins: [],
}