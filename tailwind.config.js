/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        maroon: '#800000',
        golden: '#FFD700',
        beige: '#F5F5DC',
        'dark-brown': '#5A2D0D',
        charcoal: '#36454F',
      },
    },
  },
  plugins: [],
}

