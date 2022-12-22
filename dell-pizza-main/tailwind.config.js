/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        orange: "#ff431e",
        'dark-black' : "#000",
        black: "#191919",
        gray: "#f5f5f5",
        grey: "#767676",
      },
    },
  },
  plugins: [],
}
