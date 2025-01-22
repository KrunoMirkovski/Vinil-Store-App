/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#851203",
        secondary: "#C5001A",
        blackBG: "#FDF6F6",
        favorite: "#031954",
      },
      fontFamily: {
        primary: ["Inter", "serif"],
        secondary: ["Lato", "serif"],
      },
    },
  },
  plugins: [],
};
