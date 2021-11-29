// let's import the default configuration
const defaults = require('./default');

// if the server is starting in a specific environment, we'll use that
// if not, we will use "develop" by default
const configEnv = process.env.NODE_ENV || 'development';

// construct the path to the config module
// can you guess what could wrong here?
// could anything go wrong here?
const configPath = `./${configEnv}.js`;

// import a config module based on the constructed path
/* eslint-disable */
const config = require(configPath);

// merge the imported config with the defaults
// to form the final config
const finalConfig = { ...defaults, ...config };

module.exports = finalConfig;
