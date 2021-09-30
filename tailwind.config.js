const plugins = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      fm_pale_blue: "var(--fm-pale-blue)",
      fm_bright_blue: "var(--fm-bright-blue)",
      fm_very_pale_blue: "var(--fm-very-pale-blue)",
      fm_desaturated_blue: "var(--fm-desaturated-blue)",
      fm_dark_blue: "var(--fm-dark-blue)",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      purple: colors.purple,
    },
    fontFamily: {
      fm: ["Red Hat Display", "ui-sans-serif", "system-ui"],
    },
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
