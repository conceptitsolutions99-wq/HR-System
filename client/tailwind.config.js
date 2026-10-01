/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hrm: {
          primary: '#0e9f85', // Teal/green from image
          bg: '#f9fafb',      // Light gray background
          sidebar: '#ffffff',
          text: '#374151',
        },
      },
    },
  },
  plugins: [],
}
