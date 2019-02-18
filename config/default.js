const path = require('path');

module.exports = {
  port: process.env.PORT || 3000,
  host: '127.0.0.1',
  secret: 'mysecret',
  root: process.cwd(),
  templatesRoot: path.join(process.cwd(), 'templates')
};
