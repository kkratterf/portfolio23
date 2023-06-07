/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    fontFamily: {
      sans: ['PP Formula', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      black: {
        DEFAULT: '#3D3838',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      cream: {
        DEFAULT: '#FEF4E8',
        dark1: '#ECDAC5',
        dark2: '#D2BAA0',
        dark3: '#B69A79',
      },
      red: {
        DEFAULT: '#CE564B',
        dark1: '#B5463B',
        dark2: '#9D3A31',
        dark3: '#812B23',
      },
      green: {
        DEFAULT: '#069292',
        dark1: '#0E8080',
      },
    },
    extend: {
      spacing: {
        116: '28rem',
        124: '32rem',
        128: '48rem',
        136: '64rem',
        148: '80rem',
        156: '96rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  darkMode: 'class',
};
