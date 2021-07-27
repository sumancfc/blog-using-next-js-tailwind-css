module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blog: {
          blue: "#1091ff",
          red: "#f55",
          black: "#000",
          text: "#17222b",
        },
      },
      fontFamily: {
        font: "Heebo, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
