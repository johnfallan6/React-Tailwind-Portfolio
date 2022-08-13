/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d8ab4e",
        secondary: "#b48c36",
        darkBackground: "#1c1b1b",
        lightBackground: "3F5F5F5",
        header: "#fdf5e6",
        paragraph: "#85754e"
      },
    },
    fontFamily: {
      signature: ["Raleway"],
    },
  },
  plugins: [],
};
