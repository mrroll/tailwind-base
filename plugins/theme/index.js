// @ts-nocheck
const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  ({ addBase }) => {
    addBase({
      ":root": {
        ...require("./theme").base,
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          ...require("./theme").colors,
        },
      },
    },
  }
);
