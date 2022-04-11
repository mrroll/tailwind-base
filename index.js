const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addBase }) => {
  addBase({
    // Custom Colors which can be used with various Tailwind Classes.
    ":root": {
      "--tw-custom-color-brand": "99 102 241",
      "--tw-custom-color-accent": "59 130 246",
      "--tw-custom-color-background": "250 250 250",
      "--tw-custom-color-text": "17 24 39",
      "--tw-custom-color-positive": "16 185 129",
      "--tw-custom-color-negative": "249 115 22",
      "&.dark-mode": {
        "--tw-custom-color-text": "250 250 250",
        "--tw-custom-color-background": "17 24 39",
      },
    },
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-root-stacking-context
    // https://css-tricks.com/notes-on-josh-comeaus-custom-css-reset/
    "html, body, #__next, #root": {
      height: "100%",
    },
    "p, h1, h2, h3, h4, h5, h6, li, dl, dt, blockquote": {
      "overflow-wrap": "break-word",
    },
    "#__next, #root": {
      isolation: "isolate",
    },
  });
});
