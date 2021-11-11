module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#1e2021",
        blood: "#e83e8c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
