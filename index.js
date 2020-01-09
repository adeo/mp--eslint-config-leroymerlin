"use strict";

module.exports = {
  env: {
    node: true,
    es6: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "plugin:node/recommended",
    "plugin:jest/recommended",
    "plugin:jsdoc/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["node", "jest", "jsdoc", "prettier"],
  parserOptions: {
    sourceType: "script",
  },
  settings: {
    jsdoc: {
      preferredTypes: {
        object: "object",
      },
    },
  },
  rules: {
    "jsdoc/require-param-description": 0,
    "no-console": "error",
    strict: ["error", "safe"],
  },
};
