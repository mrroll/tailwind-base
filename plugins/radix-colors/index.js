// @ts-nocheck
const plugin = require("tailwindcss/plugin");

module.exports = plugin(() => ({}), {
  theme: {
    extend: {
      colors: {
        ...require("./generated-colors"),
      },
    },
  },
});
