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
        primary: "#EAF1FF",
        primarydark: "#AFD6FE",
        secondary: "#3C64B9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
