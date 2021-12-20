const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const UserProject = sequelize.define(
  "userproject",
  {
    UserProjectID: {
      type: DataTypes.BIGINT,
      unique: true,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    UserID: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    ProjectID: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    tableName: "userproject",
    timestamps: false,
  }
);

module.exports = UserProject;
