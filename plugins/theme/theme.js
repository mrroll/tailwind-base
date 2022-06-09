const radixColors = require("@radix-ui/colors");
const toChannels = require("../../tailwindcss/toChannels");

const prefix = "--tw-custom-";

const scale = "blue";
const scaleAccent = "yellow";

const uses = {
  "color-bg": "1",
  "color-bg-hover": "2",

  "color-component": "3",
  "color-component-hover": "4",
  "color-component-focus": "5",

  "color-border": "6",
  "color-border-hover": "7",
  "color-border-focus": "8",

  "color-section": "9",
  "color-section-hover": "10",

  "color-text": "12",
  "color-text-low-contrast": "11",
};

const usesContextual = {
  "color-positive": toChannels(radixColors.green.green9),
  "color-positive-text": toChannels(radixColors.green.green3),

  "color-negative": toChannels(radixColors.red.red9),
  "color-negative-text": toChannels(radixColors.red.red3),
};

const usesColors = Object.entries(uses).reduce((all, current) => {
  const [key, value] = current;

  return {
    ...all,
    ...{
      [`${prefix}${key}`]: toChannels(radixColors[scale][`${scale}${value}`]),
    },
    ...{
      [`${prefix}${key}-accent`]: toChannels(
        radixColors[scaleAccent][`${scaleAccent}${value}`]
      ),
    },
  };
}, {});

const usesContextualColors = Object.entries(usesContextual).reduce(
  (all, current) => {
    const [key, value] = current;

    return {
      ...all,
      ...{
        [`${prefix}${key}`]: value,
      },
    };
  },
  {}
);

const colors = {
  ...usesColors,
  ...usesContextualColors,
};

module.exports.base = colors;

module.exports.colors = Object.entries({
  ...uses,
  ...usesContextual,
}).reduce((all, current) => {
  const [key] = current;

  return {
    ...all,
    ...{ [key]: `rgb(var(${prefix}${key}) / <alpha-value>)` },
    ...{
      [`${key}-accent`]: `rgb(var(${prefix}${key}-accent) / <alpha-value>)`,
    },
  };
}, {});
