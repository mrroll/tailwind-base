module.exports = {
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),

    require("@tailwindcss/aspect-ratio"),
    require("./plugins/aspect-ratio"),

    require("tailwindcss-border-gradient-radius"),
    require("./plugins/tailwindcss-border-gradient-radius"),

    require("./plugins/reset"),
    require("./plugins/theme"),
    require("./plugins/radix-colors"),
    require("./plugins/keyframes"),
    require("./plugins/fluid-typography"),
  ],
};
