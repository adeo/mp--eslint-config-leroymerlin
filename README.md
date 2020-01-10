## eslint-config-leroymerlin

# LeroyMerlin's ESLint config for Node.js apps

## Install & Usage

```bash
$ npm install --save-dev eslint prettier eslint-plugin-leroymerlin
```

- Requires Node.js `>=10.18.0`
- Requires ESLint `>=6.8.0`

**Note:** It recommends a use of [the "engines" field of package.json](https://docs.npmjs.com/files/package.json#engines). The "engines" field is used by `node/no-unsupported-features/*` rules.

**.eslintrc.js** (An example)

```javascript
"use strict";

module.exports = {
  root: true,
  extends: ["leroymerlin"],
  rules: {
    /*
      Add any additional rules here
    */
    "no-console": "warn",
  },
};
```

Optionally, use it with [husky 🐶](https://github.com/typicode/husky) and [lint-staged 🚫💩](https://github.com/okonet/lint-staged)
