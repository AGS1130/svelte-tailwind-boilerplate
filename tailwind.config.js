module.exports = {
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "hover"],
    backgroundOpacity: ["dark"],
    borderColor: ["dark", "dark-hover", "responsive", "hover"],
    textColor: ["dark", "dark-hover", "hover"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
