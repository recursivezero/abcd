/** @type {import("@types/prettier").Options} */
module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  trailingComma: "none",
  htmlWhitespaceSensitivity: "css",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    },
    {
      files: "*.json",
      options: {
        printWidth: 10000
      }
    }
  ]
};
