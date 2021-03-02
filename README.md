### eslint-config-leroymerlin

# LeroyMerlin's ESLint config for Node.js apps

- Requires Node.js `>=10.18.0`
- Requires ESLint `>=7.6.0`

## Using with Javascript apps

`@leroymerlin/eslint-config-leroymerlin/node/javascript`

### Install & Usage

```bash
$ npm install --save-dev eslint prettier @leroymerlin/eslint-config-leroymerlin
```

**Note:** It recommends a use of [the "engines" field of package.json](https://docs.npmjs.com/files/package.json#engines). The "engines" field is used by `node/no-unsupported-features/*` rules.

**package.json**

```javascript
{
  /*
    ...
  */

  "engines": {
    "node": ">=10.18.0"
  }
}
```

**.eslintrc.js** (An example)

```javascript
'use strict';

module.exports = {
  root: true,
  extends: ['@leroymerlin/eslint-config-leroymerlin/node/javascript'],
  rules: {
    /*
      Add any additional rules here
    */
    'no-console': 'warn',
  },
};
```

## Using with Typescript apps

`@leroymerlin/eslint-config-leroymerlin/node/typescript`

### Install & Usage

```bash
$ npm install --save-dev eslint prettier @leroymerlin/eslint-config-leroymerlin @typescript-eslint/eslint-plugin
```

**.eslintrc.js** (An example)

```javascript
'use strict';

module.exports = {
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: ['@leroymerlin/eslint-config-leroymerlin/node/typescript'],
  rules: {
    /*
      Add any additional rules here
    */
    'no-console': 'warn',
  },
};
```

## Additional Configuration

**Please**, use it config with [husky](https://github.com/typicode/husky) 🐶 and [lint-staged](https://github.com/okonet/lint-staged) 🚫💩

To use git-hooks, install required dependencies via npm:

```bash
$ npm install --save-dev husky lint-staged
```

**.huskyrc.js**

```javascript
'use strict';

module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
  },
};
```

**lint-staged.config.js** (Javascript apps)

```javascript
'use strict';

module.exports = {
  '*.{js,json,md,y*ml}': ['prettier --write'],
  '*.js': ['eslint --fix'],
};
```

**lint-staged.config.js** (Typescript apps)

```javascript
const fs = require('fs');

function generateTSConfig(stagedFilenames) {
  const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
  tsconfig.include = stagedFilenames;
  fs.writeFileSync('tsconfig.lint.json', JSON.stringify(tsconfig));
  return 'tsc --noEmit --project tsconfig.lint.json';
}

module.exports = {
  '*.{js,ts,json,md,y*ml}': ['prettier --write'],
  '*.ts': ['eslint --fix', generateTSConfig],
};
```

## License

@leroymerlin/eslint-config-leroymerlin is [MIT](LICENSE).
