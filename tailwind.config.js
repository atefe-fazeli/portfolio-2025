/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        "brand-pink": "#dc00d3",
        "brand-cyan": "#0cffff",
        "brand-navy": "#010042",
        "brand-light": "#f8f8f8",
        "brand-light-2": "#fafafa",
      },
    },
  },
  plugins: [],
}

