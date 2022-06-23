const radixColors = require("@radix-ui/colors");
const toChannels = require("../../tailwindcss/toChannels");

const prefix = "--tw-custom-";

const scale = "purple";
const scaleAccent = "blue";

const uses = {
  "color-base": "1",
  "color-bg-subtle": "2",
  "color-bg": "3",
  "color-bg-hover": "4",
  "color-bg-active": "5",
  "color-line": "6",
  "color-border": "7",
  "color-border-hover": "8",
  "color-solid": "9",
  "color-solid-hover": "10",
  "color-text": "11",
  "color-text-contrast": "12",
};

const usesContextual = {
  "color-positive-base": toChannels(radixColors.green.green1),
  "color-positive-bg-subtle": toChannels(radixColors.green.green2),
  "color-positive-bg": toChannels(radixColors.green.green3),
  "color-positive-bg-hover": toChannels(radixColors.green.green4),
  "color-positive-bg-active": toChannels(radixColors.green.green5),
  "color-positive-line": toChannels(radixColors.green.green6),
  "color-positive-border": toChannels(radixColors.green.green7),
  "color-positive-border-hover": toChannels(radixColors.green.green8),
  "color-positive-solid": toChannels(radixColors.green.green9),
  "color-positive-solid-hover": toChannels(radixColors.green.green10),
  "color-positive-text": toChannels(radixColors.green.green11),
  "color-positive-text-contrast": toChannels(radixColors.green.green12),

  "color-negative-base": toChannels(radixColors.red.red1),
  "color-negative-bg-subtle": toChannels(radixColors.red.red2),
  "color-negative-bg": toChannels(radixColors.red.red3),
  "color-negative-bg-hover": toChannels(radixColors.red.red4),
  "color-negative-bg-active": toChannels(radixColors.red.red5),
  "color-negative-line": toChannels(radixColors.red.red6),
  "color-negative-border": toChannels(radixColors.red.red7),
  "color-negative-border-hover": toChannels(radixColors.red.red8),
  "color-negative-solid": toChannels(radixColors.red.red9),
  "color-negative-solid-hover": toChannels(radixColors.red.red10),
  "color-negative-text": toChannels(radixColors.red.red11),
  "color-negative-text-contrast": toChannels(radixColors.red.red12),
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
