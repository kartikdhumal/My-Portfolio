/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

