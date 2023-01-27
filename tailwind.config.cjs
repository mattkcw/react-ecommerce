/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'golmokgil': ['Golmokgil', 'sans-serif']
      },
      backgroundImage: {
        'laptop': "url('./src/assets/images/laptop.jpg')",
        'mountain': "url('./src/assets/images/mountain.jpg')",
        'sunset': "url('./src/assets/images/sunset.jpg')",
        'mountains': "url('./src/assets/images/mountains.jpg')",
      }
    },
  },
  plugins: [],
}
