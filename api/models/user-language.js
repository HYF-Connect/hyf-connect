const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const userLanguage = sequelize.define(
   "userlanguage",
   {
      UserLanguageID: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
      },
      UserID: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      LanguageID: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      Level: {
         type: DataTypes.INTEGER,
         allowNull: true,
      },
   },
   {
      tableName: "userlanguage",
      timestamps: false,
   }
);

module.exports = userLanguage;
