const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Type = sequelize.define(
  "type",
  {
    TypeID: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    Title: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: "type",
    timestamps: false,
  }
);

module.exports = Type;
