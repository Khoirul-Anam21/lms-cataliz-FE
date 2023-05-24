/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(180deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear',
      },
    },
  },
  plugins: [],
}
