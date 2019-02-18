const path = require('path');

module.exports = {
  // secret data can be moved to env variables
  // or a separate config
  port: 3000,
  host: '127.0.0.1',
  secret: 'mysecret',
  root: process.cwd(),
  templatesRoot: path.join(process.cwd(), 'templates')
};
