module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          dark: "#0a0c1b",
          light: "#1c1938",
          lighter: "#ad5dd7",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
