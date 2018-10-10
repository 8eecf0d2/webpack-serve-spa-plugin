const convert = require('koa-connect');
const compress = require('compression');
const history = require("connect-history-api-fallback");

module.exports = (app, options) => app.use(convert(compress())) && app.use(convert(history(options || {})));