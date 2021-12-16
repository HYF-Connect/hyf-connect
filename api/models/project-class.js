const {DataTypes} = require ('sequelize');
const sequelize = require('../db/db.js');

const projectClass = sequelize.define(
    'projectclass',
    {
        ProjectClassID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        ClassID:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ProjectID:{
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        tableName: 'projectclass',
        timestamps: false,
    }

);

module.exports = projectClass;