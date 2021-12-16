const {DataTypes} = require('sequelize');
const { sequelize } = require('./language');

const UserType = sequelize.define(
    'usertype',
    {
        UserTypeID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        UserID:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TypeID:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        tableName:'usertype',
        timestamps: false
    }
);

module.exports = UserType;