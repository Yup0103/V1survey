/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7500',
        secondary: '#FFF1E6',
        // You might want to keep or adjust gray shades here too
        // For example:
        // gray: {
        //   ...require('tailwindcss/colors').gray,
        //   50: '#FAFAFA',
        //   900: '#1A202C',
        // }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 