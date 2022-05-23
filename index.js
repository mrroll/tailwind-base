const plugin = require("tailwindcss/plugin");
const { base } = require("./theme");

module.exports = plugin(({ addBase, addUtilities, theme }) => {
  addBase({
    ":root": {
      ...base,

      "--tw-custom-animation-duration": "150ms",
      "--tw-custom-animation-timing-function": "ease",
    },

    // https://www.joshwcomeau.com/css/custom-css-reset/
    // https://css-tricks.com/notes-on-josh-comeaus-custom-css-reset/
    "html, body, #__next, #root": {
      height: "100%",
    },
    "#__next, #root": {
      isolation: "isolate",
    },
    "p, h1, h2, h3, h4, h5, h6, li, dl, dt, blockquote, pre": {
      "overflow-wrap": "break-word",
    },
    pre: {
      "white-space": "normal",
    },
  });

  addUtilities({
    ".text-h1": {
      "line-height": theme("lineHeight.none"),
      "font-size": [
        theme("fontSize.6xl"),
        `clamp(${theme("fontSize.6xl")}, 6vw, theme('fontSize.7xl'))`,
      ],
    },

    ".text-h2": {
      "line-height": theme("lineHeight.none"),
      "font-size": [
        theme("fontSize.5xl"),
        `clamp(${theme("fontSize.5xl")}, 5vw, theme('fontSize.6xl'))`,
      ],
    },

    ".text-h3": {
      "line-height": theme("lineHeight.none"),
      "font-size": [
        theme("fontSize.4xl"),
        `clamp(${theme("fontSize.4xl")}, 4vw, theme('fontSize.5xl'))`,
      ],
    },

    ".text-h4": {
      "line-height": theme("lineHeight.none"),
      "font-size": [
        theme("fontSize.3xl"),
        `clamp(${theme("fontSize.3xl")}, 3vw, theme('fontSize.4xl'))`,
      ],
    },

    ".text-h5": {
      "line-height": theme("lineHeight.none"),
      "font-size": [
        theme("fontSize.2xl"),
        `clamp(${theme("fontSize.2xl")}, 2vw, theme('fontSize.3xl'))`,
      ],
    },

    ".text-h6": {
      "line-height": theme("lineHeight.10"),
      "font-size": [
        theme("fontSize.xl"),
        `clamp(${theme("fontSize.xl")}, 1.5vw, theme('fontSize.2xl'))`,
      ],
    },

    ".text-p": {
      "line-height": theme("lineHeight.6"),
      "font-size": [
        theme("fontSize.base"),
        `clamp(${theme("fontSize.base")}, 1vw, theme('fontSize.lg'))`,
      ],
    },
  });
});
