/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "rgb(255, 255, 255)",
        "secondary-color": "rgba(40, 38, 44, 1)",
        "secondary-color-shade": "rgba(58, 55, 64, 1)",
        "gradient-1": "rgba(5, 26, 145, 1)",
        "gradient-2": "rgba(6, 28, 147, 1)",
        "gradient-3": "rgba(34, 132, 241, 1)",
        "gradient-4": "rgba(31, 128, 235, 1)",
        "gradient-5": "rgba(6, 40, 110, 1)",
        "gradient-6": "rgba(22, 78, 192, 1)",
      },

      fontFamily: {
        montserrat: ['"Montserrat"'],
        inter: ['"Inter"'],
      },
    },
  },
  plugins: [],
};
