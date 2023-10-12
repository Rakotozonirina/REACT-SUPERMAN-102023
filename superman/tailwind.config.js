/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        adventure: ['Adventure', 'sans-serif'],
        rajdhani: ['Rajdhani-Bold', 'sans-serif'],
        cantarell: ['Cantarell-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

