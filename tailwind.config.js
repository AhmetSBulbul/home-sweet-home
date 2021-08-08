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
      night: "rgba(65, 83, 121, 1)",
      transparent: "transparent",
      primary: {
        lightest: "rgba(23, 178, 181, 1)",
        light: "rgba(19, 142, 144, 1)",
        DEFAULT: "rgba(15, 113, 115, 1)",
        dark: "rgba(12, 89, 90, 1)",
        darkest: "rgba(9, 71, 72, 1)",
      },
      secondary: {
        lightest: "rgba(246, 159, 142, 1)",
        light: "rgba(243, 127, 104, 1)",
        DEFAULT: "rgba(240, 100, 73, 1)",
        dark: "rgba(238, 79, 47, 1)",
        darkest: "rgba(237, 63, 29, 1)",
      },
      gray: {
        10: "rgba(254, 254, 254, 1)",
        20: "rgba(245, 245, 245, 1)",
        30: "rgba(235, 235, 235, 1)",
        40: "rgba(224, 224, 224, 1)",
        50: "rgba(214, 214, 214, 1)",
        DEFAULT: "rgba(173, 173, 173, 1)",
        60: "rgba(173, 173, 173, 1)",
        70: "rgba(153, 153, 153, 1)",
        80: "rgba(133, 133, 133, 1)",
        90: "rgba(112, 112, 112, 1)",
        100: "rgba(82, 82, 82, 1)",
        110: "rgba(61, 61, 61, 1)",
        120: "rgba(61, 61, 61, 1)",
      },
      white: "rgba(255, 255, 255, 1)",
      black: "rgba(10, 10, 10, 1)",
      messaging: {
        success: "rgba(0, 173, 88, 1)",
        info: "rgba(0, 147, 255, 1)",
        DEFAULT: "rgba(0, 147, 255, 1)",
        warning: "rgba(229, 112, 0, 1)",
        error: "rgba(255, 87, 87, 1)",
      },
    },
    extend: {
      screens: {
        tablet: "768px",
        desktop: "992px",
        "desktop-lg": "1280px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
