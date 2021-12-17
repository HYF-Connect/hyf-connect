const { Sequelize, Model } = require("sequelize");
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = require("../config.js");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connection has been established successfully :)");
  })
  .catch((err) => {
    console.error("Unable to connect to database :(", err);
  });

module.exports = sequelize;
