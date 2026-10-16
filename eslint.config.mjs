import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["coverage/**", "playwright-report/**", "test-results/**"],
  },

  js.configs.recommended,

  {
    files: ["js/**/*.js", "tests/unit/**/*.test.js"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    files: ["*.config.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
    },
  },

  prettier,
];
