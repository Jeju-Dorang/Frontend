/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#F1C4A3',
          blue: '#5F88FE',
        },
        gray: {
          dg: '#BDBDBD',
          lg: '#E8E8E8',
        },
        background: '#f1c4a380',
        blue: '#5F88FE',
        'darkest-gray': '#646464',
      },
      screens: {
        custom: '440px',
      },
    },
  },
  plugins: [],
};
