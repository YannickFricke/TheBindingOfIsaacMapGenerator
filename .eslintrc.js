module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  rules: {
    indent: ["error", 4],
    quotes: ["error", "single"],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        prefixWithI: "always"
      }
    ],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  env: {
    browser: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
