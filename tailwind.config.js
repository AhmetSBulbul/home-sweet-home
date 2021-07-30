const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      display: ["Rubik", "sans-serif"],
      link: ["Rubik", "sans-serif"],
    },
    colors: {
      primary: {
        lightest: "#17B2B5",
        light: "#138E90",
        DEFAULT: "#0F7173",
        dark: "#0C595A",
        darkest: "#094748",
      },
      secondary: {
        lightest: "#F69F8E",
        light: "#F37F68",
        DEFAULT: "#F06449",
        dark: "#EE4F2F",
        darkest: "#ED3F1D",
      },
      gray: colors.coolGray,
      white: "#fff",
      black: "#000",
      messaging: {
        success: "#00AD58",
        info: "#0093FF",
        DEFAULT: "#0093FF",
        warning: "#E57000",
        error: "#FF5757",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
