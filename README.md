# SPA Plugin

Wrapper which adds [compression](https://npmjs.com/package/compression) and [connect-history-api-fallback](https://npmjs.com/package/connect-history-api-fallback) to [webpack-serve](https://npmjs.com/package/webpack-serve).

### Usage

import and use with `add` method.

```js
const spaPlugin = require("webpack-serve-spa-plugin");

module.exports.serve = {
  add: (app) => spaPlugin(app),
  ...
}

```