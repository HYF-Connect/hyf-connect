const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Class = sequelize.define(
   "class",
   {
      ClassID: {
         type: DataTypes.BIGINT,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
      },
      Name: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
   },
   {
      tableName: "class",
      timestamps: false,
   }
);

module.exports = Class;
