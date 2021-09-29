const plugins = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // this is another way to define and load custom components
    // the other way is to use .class { @apply tailwindcss classes} in the styles.css
    plugins(function ({ addComponents }) {
      const buttons = {
        ".btn-red": {
          padding: "1rem",
          background: "red",
          color: "white",
          "&:hover": {
            border: "1px solid black",
          },
        },
      };

      addComponents(buttons);
    }),
  ],
};
