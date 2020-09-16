/**
 * Copyright 2020 Leroy Merlin Vostok LLC
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

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
