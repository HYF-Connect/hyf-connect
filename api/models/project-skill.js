const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const projectSkill = sequelize.define(
  "projectskill",
  {
    ProjectSkillID: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ProjectID: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    SkillID: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "projectskill",
    timestamps: false,
  }
);

module.exports = projectSkill;
