// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
<<<<<<< HEAD
          orange : "#F1C4A3", // 주황색
          blue : '#5F88FE' // 파란색
        },
        gray: {
          dg: "#BDBDBD", // dark gray
          lg: "#E8E8E8" // light gray
=======
          orange: '#F1C4A3',
          blue: '#5F88FE',
        },
        gray: {
          dg: '#BDBDBD',
          lg: '#E8E8E8',
>>>>>>> 8e0a69f0e9c22267b22e38b5afda2fad3ea41d19
        },
      },
    },
  },
  plugins: [],
};
