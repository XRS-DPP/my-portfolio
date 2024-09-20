/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        RobotoSlab: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
      },

      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      keyframes: {
        "slide-up-down": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up-down": "slide-up-down 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
