/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
    "./app/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        // sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        // serif: ["var(--font-bitter)", ...defaultTheme.fontFamily.serif],
        serif: ["Bitter", ...defaultTheme.fontFamily.serif],
      }, 
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addBase }) {
      addBase({
         'html': { fontSize: "18px" },
        //  'p': { fontStyle: 'italic' }
       })
     })    
  ],
};
