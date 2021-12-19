const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const UserSkill = sequelize.define(
  "userskill",
  {
    UserSkillID: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    UserID: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    SkillID: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    Level: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    SelectedSkill: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "userskill",
    timestamps: false,
  }
);

module.exports = UserSkill;
