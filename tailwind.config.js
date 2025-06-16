// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This line is crucial for scanning your React components
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Define custom font family
      },
      colors: {
        // Define any custom colors if needed later, matching your RNTea brand
        'rntea-rn': '#1A5276', // Dark Teal Blue
        'rntea-tea': '#4CAF50', // Medium Green
      },
    },
  },
  plugins: [],
}
