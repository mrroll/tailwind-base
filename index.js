const plugin = require("tailwindcss/plugin");
const radixColors = require("@radix-ui/colors");
const toChannels = require("./toChannels");

module.exports = plugin(({ addBase, theme }) => {
  addBase({
    ":root": {
      // Custom Colors which can be used with various Tailwind Classes.
      "--tw-custom-color-bg": toChannels(radixColors.blue.blue1),
      "--tw-custom-color-bg-hover": toChannels(radixColors.blue.blue2),

      "--tw-custom-color-component": toChannels(radixColors.blue.blue3),
      "--tw-custom-color-component-hover": toChannels(radixColors.blue.blue4),
      "--tw-custom-color-component-focus": toChannels(radixColors.blue.blue5),

      "--tw-custom-color-border": toChannels(radixColors.blue.blue6),
      "--tw-custom-color-border-hover": toChannels(radixColors.blue.blue7),
      "--tw-custom-color-border-focus": toChannels(radixColors.blue.blue8),

      "--tw-custom-color-section": toChannels(radixColors.blue.blue10),
      "--tw-custom-color-section-hover": toChannels(radixColors.blue.blue9),
      "--tw-custom-color-section-accent": toChannels(
        radixColors.yellow.yellow10
      ),

      "--tw-custom-color-text": toChannels(radixColors.blue.blue12),

      "--tw-custom-color-positive": toChannels(radixColors.green.green9),
      "--tw-custom-color-positive-text": toChannels(radixColors.green.green3),

      "--tw-custom-color-negative": toChannels(radixColors.red.red9),
      "--tw-custom-color-negative-text": toChannels(radixColors.red.red3),

      "&.dark-mode": {
        "--tw-custom-color-bg": toChannels(radixColors.blue.blue12),
        "--tw-custom-color-text": toChannels(radixColors.blue.blue1),
      },

      h1: {
        "line-height": theme("lineHeight.none"),
        "font-size": [
          theme("fontSize.6xl"),
          `clamp(${theme("fontSize.6xl")}, 6vw, theme('fontSize.7xl'))`,
        ],
      },

      h2: {
        "line-height": theme("lineHeight.none"),
        "font-size": [
          theme("fontSize.5xl"),
          `clamp(${theme("fontSize.5xl")}, 5vw, theme('fontSize.6xl'))`,
        ],
      },

      h3: {
        "line-height": theme("lineHeight.none"),
        "font-size": [
          theme("fontSize.4xl"),
          `clamp(${theme("fontSize.4xl")}, 4vw, theme('fontSize.5xl'))`,
        ],
      },

      h4: {
        "line-height": theme("lineHeight.none"),
        "font-size": [
          theme("fontSize.3xl"),
          `clamp(${theme("fontSize.3xl")}, 3vw, theme('fontSize.4xl'))`,
        ],
      },

      h5: {
        "line-height": theme("lineHeight.none"),
        "font-size": [
          theme("fontSize.2xl"),
          `clamp(${theme("fontSize.2xl")}, 2vw, theme('fontSize.3xl'))`,
        ],
      },

      h6: {
        "line-height": theme("lineHeight.10"),
        "font-size": [
          theme("fontSize.xl"),
          `clamp(${theme("fontSize.xl")}, 1.5vw, theme('fontSize.2xl'))`,
        ],
      },

      "p, li, dl, dt, blockquote, pre": {
        "line-height": theme("lineHeight.6"),
        "font-size": [
          theme("fontSize.base"),
          `clamp(${theme("fontSize.base")}, 1vw, theme('fontSize.lg'))`,
        ],
      },

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
});
