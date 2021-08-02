module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "#D7EBFE",
        primarydark: "#AFD6FE",
        secondary: "#1789FC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
