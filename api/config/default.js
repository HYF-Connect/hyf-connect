const path = require('path');

module.exports = {
  MODE: 'default',
  PORT: 8080,
  DATA_PATH: path.join(__dirname, '..', 'data'),
  STATIC_DIR: 'client',
};
