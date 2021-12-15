const {Sequelize} = require('sequelize');
const sequelize = require('../db/db.js');


const UserSkill = sequelize.define(
    'userskill',
    {
        UserSkillID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        UserID: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        SkillID: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Level:{
            type: Sequelize.INTEGER,
            allowNull: true
        },
        SelectedSkill: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: 'userskill',
        timestamps: false
    }
);

module.exports = UserSkill;