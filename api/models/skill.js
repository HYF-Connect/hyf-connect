const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Skill = sequelize.define(
  "skill",
  {
    SkillID: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "skill",
    timestamps: false,
  }
);

module.exports = Skill;
