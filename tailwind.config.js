/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      grey: {
        DEFAULT: "#191919",
      },
      brand: {
        DEFAULT: "#F4E7D4",
        dark: "#B89475",
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
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
