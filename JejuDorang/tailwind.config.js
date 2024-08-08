// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange : "#F1C4A3", // 주황색
          blue : '#5F88FE' // 파란색
        },
        gray: {
          dg: "#BDBDBD", // dark gray
          lg: "#E8E8E8" // light gray
        },
      },
    },
  },
  plugins: [],
};
