/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: '#036F3E',
        page: '#FFFFFF',
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(3,111,62,0.08)',
      }
    },
  },
  plugins: [],
}
