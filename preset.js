// https://tailwindcss.com/docs/customizing-colors#using-css-variables
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports.withOpacityValue = withOpacityValue;

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
    require("tailwindcss-animate"),
    require("tailwindcss-border-gradient-radius"),
  ],
};
