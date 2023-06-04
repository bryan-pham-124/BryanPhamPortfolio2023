/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'customGreen': '#0f5e43',
        'customBlack': '#212121'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'courgette': ['Courgette', 'cursive']
      },
    },
  },
  plugins: []
}

