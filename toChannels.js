const Color = require("color");

module.exports = function toChannels(input) {
  const color = Color(input);
  return color.rgb().array().join(" ");
};
