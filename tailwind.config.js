/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    fontFamily: {
      sans: ["PP Radio Grotesk", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      grey: {
        light: "#202020",
        DEFAULT: "#191919",
      },
      brand: {
        DEFAULT: "#F4E7D4",
        dark: "#B89475",
      },
      pop: {
        DEFAULT: "#E93685",
        dark: "#E01971",
      },
      azure: {
        DEFAULT: "#D6E4FF",
        dark: "#3C6CC2",
      },
      white: {
        DEFAULT: "#ffffff",
      },
    },
    extend: {
      spacing: {
        116: "28rem",
        124: "32rem",
        128: "48rem",
        136: "64rem",
        148: "80rem",
      },
      lineHeight: {
        custom: "1.1",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};
