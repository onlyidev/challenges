module.exports = {
  mode: "jit",
  purge: [
  './src/**/*.{js,jsx,ts,tsx,vue}',
  './ch*/**/*.vue'],
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
