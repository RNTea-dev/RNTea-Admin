/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'custom-beige': '#fce4d6',
      }
    }
  },
  plugins: [],
}
