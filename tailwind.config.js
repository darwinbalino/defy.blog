module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        slate: "#1e2021",
        blood: "#e83e8c",
        royal: "#2825eb",
        royal2: "#eb25e8",
      },
      fontSize: {
        xxs: ".6rem",
        tiny: ".80rem",
        xs: ".75rem",
        sm: ".875rem",
        "sm1.5": "1.0rem",
        base: "1.10rem",
        lg: "1.15rem",
        xl: "1.25rem",
        "xl1.5": "1.3rem",
        "2xl": "1.4rem",
        "3xl": "1.875rem",
        "3.5xl": "2rem",
        "4xl": "2.25rem",
        "4.5xl": "2.7rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
