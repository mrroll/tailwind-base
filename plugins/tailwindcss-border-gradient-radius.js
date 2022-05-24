// @ts-nocheck
const plugin = require("tailwindcss/plugin");
const radix = require("./radix-colors/generated-colors");
const { colors } = require("./theme/theme");

module.exports = plugin(() => {}, {
  theme: {
    extend: {
      linearBorderGradients: ({ theme }) => {
        return {
          colors: {
            "section-accent": [
              // You can also use any other value from the theme.
              // theme('colors.blue-900'),
              // theme('colors.radix-blue9'),
              // "rgb(var(--tw-custom-color-bg))",
              "rgb(var(--tw-custom-color-section))",
              "rgb(var(--tw-custom-color-section-accent))",
            ],
          },
          background: { ...radix, ...colors, ...theme("colors") },
          borders: theme("borderWidth"),
        };
      },
    },
  },
});
