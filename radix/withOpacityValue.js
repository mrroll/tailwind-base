// https://tailwindcss.com/docs/customizing-colors#using-css-variables
module.exports = function withOpacityValue(value) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(${value})`;
    }
    return `rgb(${value} / ${opacityValue})`;
  };
};
