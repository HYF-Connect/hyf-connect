const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const nationality = sequelize.define(
   "nationality",
   {
      NationalityID: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
      },
      Country: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
   },
   {
      tableName: "nationality",
      timestamps: false,
   }
);

module.exports = nationality;
