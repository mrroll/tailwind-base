const withOpacityValue = require("./withOpacityValue");

const colors = {
  "color-brand": withOpacityValue("--tw-custom-color-brand"),
  "color-accent": withOpacityValue("--tw-custom-color-accent"),
  "color-background": withOpacityValue("--tw-custom-color-background"),
  "color-text": withOpacityValue("--tw-custom-color-text"),
  "color-positive": withOpacityValue("--tw-custom-color-positive"),
  "color-negative": withOpacityValue("--tw-custom-color-negative"),
};

module.exports = {
  corePlugins: {
    aspectRatio: false,
  },

  theme: {
    extend: {
      colors,

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
        "slide-in-from-right": {
          from: { opacity: 0, transform: "translateX(100%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-in-from-left": {
          from: { opacity: 0, transform: "translateX(-100%)" },
          to: { opacity: 1, transform: "translateX(0%)" },
        },
        "slide-out-to-right": {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(100%)" },
        },
        "slide-out-to-left": {
          from: { opacity: 1, transform: "translateX(0%)" },
          to: { opacity: 0, transform: "translateX(-100%)" },
        },
      },

      // prettier-ignore
      animation: {
        "fade-in"            : "fade-in var(--tw-custom-animation-duration) linear",
        "fade-out"           : "fade-out var(--tw-custom-animation-duration) linear",
        "rotate-in"          : "rotate-in var(--tw-custom-animation-duration) ease",
        "rotate-out"         : "rotate-out var(--tw-custom-animation-duration) ease",
        "slide-in-from-right": "slide-in-from-right var(--tw-custom-animation-duration) ease-in-out",
        "slide-in-from-left" : "slide-in-from-left var(--tw-custom-animation-duration) ease-in-out",
        "slide-out-to-right" : "slide-out-to-right var(--tw-custom-animation-duration) ease-in-out",
        "slide-out-to-left"  : "slide-out-to-left var(--tw-custom-animation-duration) ease-in-out",
      },

      linearBorderGradients: ({ theme }) => {
        return {
          colors: {
            "brand-accent": [
              "rgb(var(--tw-custom-color-brand))",
              "rgb(var(--tw-custom-color-accent))",
            ],
          },
          background: { ...colors, ...theme("colors") },
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
