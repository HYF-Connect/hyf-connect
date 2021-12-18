const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const userLanguage = sequelize.define(
   "userlanguage",
   {
      UserLanguageID: {
         type: DataTypes.BIGINT,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
      },
      UserID: {
         type: DataTypes.BIGINT,
         allowNull: false,
      },
      LanguageID: {
         type: DataTypes.BIGINT,
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
