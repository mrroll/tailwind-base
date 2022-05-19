const fs = require("fs");
const all = require("@radix-ui/colors");
const Color = require("color");

async function main() {
  const allColorsObject = Object.entries(all)
    .map((item) => {
      const [key, value] = item;

      const suffix = (function () {
        if (/DarkA$/.test(key) === true || /Dark$/.test(key) === true) {
          return "-dark";
        }

        return "";
      })();

      return [
        key,
        Object.fromEntries(
          Object.entries(value).map((innerItem) => {
            const [innerKey, innerValue] = innerItem;

            return [`${innerKey}${suffix}`, innerValue];
          })
        ),
      ];
    })
    .flat(1)
    .filter((item) => typeof item !== "string")
    .reduce((all, item) => {
      return { ...all, ...item };
    }, {});

  const allColorsObjectFormatted = Object.fromEntries(
    Object.entries(allColorsObject).map((item) => {
      const [key, value] = item;

      const color = Color(value, "hsl");
      const channels = color.rgb().array().join(" ");

      return [`radix-${key}`, `withOpacityValue('${channels}')`];
    })
  );

  await fs.promises.writeFile(
    "./radix/preset.js",

    `const withOpacityValue = require("./withOpacityValue");

module.exports = ${JSON.stringify(allColorsObjectFormatted, null, 2)
      .replace(/"withOpacityValue(.+)",/g, "withOpacityValue$1,")
      .replace(/"withOpacityValue(.+)"/g, "withOpacityValue$1")}`
  );
}

main();
