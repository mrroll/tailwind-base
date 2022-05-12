const plugin = require("tailwindcss/plugin");
const toChannels = require("./toChannels");

module.exports = plugin(({ addBase }) => {
  addBase({
    // Custom Colors which can be used with various Tailwind Classes.
    ":root": {
      "--tw-custom-color-brand": toChannels("#6366F1"),
      "--tw-custom-color-accent": toChannels("#3B82F6"),
      "--tw-custom-color-background": toChannels("#FAFAFA"),
      "--tw-custom-color-text": toChannels("#111827"),
      "--tw-custom-color-positive": toChannels("#10B981"),
      "--tw-custom-color-negative": toChannels("#F97316"),
      "&.dark-mode": {
        "--tw-custom-color-text": toChannels("#FAFAFA"),
        "--tw-custom-color-background": toChannels("#111827"),
      },
    },
    // https://www.joshwcomeau.com/css/custom-css-reset/#digit-root-stacking-context
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
