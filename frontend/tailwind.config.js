/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002C54",
        secondary: "#C5001A",
        blackBG: "#FDF6F6",
        favorite: "#FFB51D",
      },
      fontFamily: {
        primary: ["Inter", "serif"],
        secondary: ["Lato", "serif"],
      },
    },
  },
  plugins: [],
};
