"use strict";

module.exports = {
  "*.{js,json,md,y*ml}": ["prettier --write", "git add"],
  "*.js": ["eslint --fix", "git add"],
};
