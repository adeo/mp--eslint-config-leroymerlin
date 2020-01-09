"use strict";

module.exports = {
  skipCI: true,
  hooks: {
    "pre-commit": "lint-staged",
  },
};
