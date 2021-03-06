const sequelize = require("../db");

//loading different models in sequelize

const User = require("../../models/user.js");
const Skill = require("../../models/skill.js");
const Region = require("../../models/region.js");
const Language = require("../../models/language");
const Nationality = require("../../models/nationality");
const Class = require("../../models/class");
const Type = require("../../models/type.js");
const Project = require("../../models/project.js");
// create tables

const createTables = async () => {
  const result = await sequelize.sync({ force: true });
};

createTables().then(() => {
  process.exit();
});
