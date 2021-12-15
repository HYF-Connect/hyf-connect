const sequelize = require("../db");

//loading different models in sequelize

const User = require("../../models/user");
const Region = require("../../models/region.js");
const Language = require("../../models/language");
const sequelize = require("../db.js");

// create tables

const createTables = async () => {
   const result = await sequelize.sync({ force: true });
};

createTables().then(() => {
   process.exit();
});
