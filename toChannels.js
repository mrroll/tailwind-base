const Color = require("color");

module.exports = function toChannels(hex) {
  const color = Color(hex);
  return color.rgb().array().join(" ");
};
