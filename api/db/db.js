const { Sequelize, Model } = require("sequelize");
const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  USE_SSL,
} = require("../config.js");
const settings =
  USE_SSL === "true"
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {};

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: settings,
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
