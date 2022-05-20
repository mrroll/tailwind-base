const radix = require("./radix/preset");
const { preset } = require("./theme");

module.exports = {
  corePlugins: {
    aspectRatio: false,
  },

  theme: {
    extend: {
      colors: {
        ...radix,
        ...preset,
      },

      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },

        "rotate-in": {
          from: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
          to: { opacity: 1, transform: "rotateX(0) scale(1)" },
        },
        "rotate-out": {
          from: { opacity: 1, transform: "rotateX(0) scale(1)" },
          to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
        },

        "slide-in-from-top": {
          from: {
            opacity: 0,
            transform:
              "translateY(calc(var(--tw-custom-animation-slide-length, 100%) * -1))",
          },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-from-right": {
          from: {
            opacity: 0,
            transform:
              "translateX(var(--tw-custom-animation-slide-length, 100%))",
          },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-in-from-bottom": {
          from: {
            opacity: 0,
            transform:
              "translateY(var(--tw-custom-animation-slide-length, 100%))",
          },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          from: {
            opacity: 0,
            transform:
              "translateX(calc(var(--tw-custom-animation-slide-length, 100%) * -1))",
          },
          to: { opacity: 1, transform: "translateX(0%)" },
        },
        "slide-out-to-top": {
          from: { opacity: 1, transform: "translateY(0)" },
          to: {
            opacity: 0,
            transform:
              "translateY(calc(var(--tw-custom-animation-slide-length, 100%) * -1))",
          },
        },
        "slide-out-to-right": {
          from: { opacity: 1, transform: "translateX(0)" },
          to: {
            opacity: 0,
            transform:
              "translateX(var(--tw-custom-animation-slide-length, 100%))",
          },
        },
        "slide-out-to-bottom": {
          from: { opacity: 1, transform: "translateY(0)" },
          to: {
            opacity: 0,
            transform:
              "translateY(var(--tw-custom-animation-slide-length, 100%))",
          },
        },
        "slide-out-to-left": {
          from: { opacity: 1, transform: "translateX(0%)" },
          to: {
            opacity: 0,
            transform:
              "translateX(calc(var(--tw-custom-animation-slide-length, -100%) * -1))",
          },
        },
      },

      // prettier-ignore
      animation: {
        "fade-in"              : "fade-in var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "fade-out"             : "fade-out var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "rotate-in"            : "rotate-in var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "rotate-out"           : "rotate-out var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "slide-in-from-top"    : "slide-in-from-top var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "slide-in-from-right"  : "slide-in-from-right var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "slide-in-from-bottom" : "slide-in-from-bottom var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "slide-in-from-left"   : "slide-in-from-left var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "slide-out-to-top"     : "slide-out-to-top var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "slide-out-to-right"   : "slide-out-to-right var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "slide-out-to-bottom"  : "slide-out-to-bottom var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
        "slide-out-to-left"    : "slide-out-to-left var(--tw-custom-animation-duration) var(--tw-custom-animation-timing-function)",
      },

      linearBorderGradients: ({ theme }) => {
        return {
          colors: {
            "section-accent": [
              "rgb(var(--tw-custom-color-section))",
              "rgb(var(--tw-custom-color-section-accent))",
            ],
          },
          background: { ...radix, ...preset, ...theme("colors") },
          borders: theme("borderWidth"),
        };
      },
    },

    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-border-gradient-radius"),
  ],
};
