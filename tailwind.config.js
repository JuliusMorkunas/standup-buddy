/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'primary': '#9b87f5',
        'secondary': '#7e69ab',
      },
    },
  },
  plugins: [],
}
