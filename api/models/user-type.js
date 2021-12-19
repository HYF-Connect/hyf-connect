const { DataTypes } = require("sequelize");
const { sequelize } = require("./language");

const UserType = sequelize.define(
  "usertype",
  {
    UserTypeID: {
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
    TypeID: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "usertype",
    timestamps: false,
  }
);

module.exports = UserType;
