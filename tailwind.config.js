/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        prata: ["Prata", "serif"],
      },
      colors: {
        txColor: {
          100: "#212121",
        },
        principal: {
          100: "#6278f7",
          200: "#95ffd4",
          300: "#f2f2f2",
        },
        fundo: {
          100: "#D9F7E9",
          200: "#E8F8FF",
          300: "#F0F8E2",
          400: "#FDE7E8",
          500: "#FAE9F5",
          600: "#FFF5D9",
          700: "#ffeedf",
        },
        destaque: {
          100: "#57C278",
          200: "#82CFFA",
          300: "#A6D157",
          400: "#E06B69",
          500: "#DB6EBF",
          600: "#FFBA05",
          700: "#FF8A29",
        },
      },
      boxShadow: {
        "3xl": "10px 10px 30px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
