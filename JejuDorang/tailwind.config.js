// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#F1C4A3',
        gray: '#BDBDBD',
        subgray: '#E8E8E8',
        black: '#000000',
        blue: '#5F88FE',
      },
    },
  },
  plugins: [],
};
