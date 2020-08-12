'use strict';

module.exports = {
  '*.{js,json,md,y*ml}': ['prettier --write'],
  '*.js': ['eslint --fix'],
};
