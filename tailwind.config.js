/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors:{
        darkBlue: "#2A0896",
        lightBlue: "#2397F3",
        lightGray: "#D9D9D980",
        darkGray: "#C5C2C2",
        blueBox: "#DDE9FF",
        grayBox: "#D9DEEF",
        blueBtn: "#4482C2",
        textGray: "#282828B2",
        textLightGray: "#8E8787",
        bluecolor: "#2A52BE"
      }
    },
  },
  plugins: [],
}
