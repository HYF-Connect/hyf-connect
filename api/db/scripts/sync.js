const sequelize = require("../db");

//loading different models in sequelize

const User = require("../../models/user");
const language = require("../../models/language");

// create tables

const createTables = async () => {
   const result = await sequelize.sync({ force: true });
};

createTables().then(() => {
   process.exit();
});
