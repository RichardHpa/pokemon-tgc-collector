/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    screens: { sm: "480px", md: "768px", lg: "976px", xl: "1200px" },
    extend: {},
  },
  plugins: [],
};
