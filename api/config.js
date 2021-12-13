const dotenv = require('dotenv');
const result = dotenv.config({silent: true});
const {parsed : envs} = result;


module.exports = {...process.env, ...envs};