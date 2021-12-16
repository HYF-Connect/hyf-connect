const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const projectSkill = sequelize.define(
   "projectskill",
   {
      ProjectSkillID: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
      },
      ProjectID: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      SkillID: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   },
   {
      tableName: "projectskill",
      timestamps: false,
   }
);

module.exports = projectSkill;
