const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const projectClass = sequelize.define(
   "projectclass",
   {
      ProjectClassID: {
         type: DataTypes.BIGINT,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
         unique: true,
      },
      ClassID: {
         type: DataTypes.BIGINT,
         allowNull: false,
      },
      ProjectID: {
         type: DataTypes.BIGINT,
         allowNull: false,
      },
   },
   {
      tableName: "projectclass",
      timestamps: false,
   }
);

module.exports = projectClass;
