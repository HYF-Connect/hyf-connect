const {Sequelize} = require ('sequelize');
const sequelize = require('../db/db.js');


const Skill = sequelize.define('skill',
{
    SkillID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    Name: {
        type:Sequelize.STRING(50),
        allowNull: false
    }
},
{
    tableName: 'skill',
    timestamps: false
});

module.exports = Skill