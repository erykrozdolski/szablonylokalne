/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      heading: ["Montserrat", "sans-serif"],
      black: ["Montserrat Black", "sans-serif"],
      light: ["Montserrat Light", "sans-serif"],
      italic: ["Montserrat Italic", "sans-serif"],
    },
  },
  plugins: [],
};
