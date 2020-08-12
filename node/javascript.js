'use strict';

module.exports = {
  extends: [
    '../index',
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['node', 'jsdoc', 'prettier'],
  parserOptions: {
    sourceType: 'script',
  },
  settings: {
    jsdoc: {
      preferredTypes: {
        object: 'object',
      },
    },
  },
  rules: {
    'jsdoc/require-param-description': 0,
    strict: ['error', 'safe'],
  },
};
