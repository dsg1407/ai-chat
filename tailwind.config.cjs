/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#1A1924",
        boxBackground: "#282843",
      },
      gridTemplateRows: {
        layout: "76px 1fr 56px",
      },
    },
  },
  plugins: [],
}
