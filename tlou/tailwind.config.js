/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
 
      backgroundImage: {
        'custom-pattern': "url('trim.jpeg')",
            },
    },
  },
  plugins: [],
}
