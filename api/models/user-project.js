const {DataTypes} = require ('sequelize');
const sequelize = require ('../db/db.js');

const UserProject = sequelize.define(
    "userProject",
    {
        UserProjectID:{
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ProjectID:{
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        tableName: 'UserProject',
        timestamps: false
    }
);

module.exports = UserProject;