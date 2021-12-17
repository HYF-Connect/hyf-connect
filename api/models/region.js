const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Region = sequelize.define(
   "region",
   {
      RegionID: {
         type: DataTypes.BIGINT,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
      },
      Name: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
   },
   {
      tableName: "region",
      timestamps: false,
   }
);

module.exports = Region;
