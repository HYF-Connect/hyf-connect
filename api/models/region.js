const {Sequelize} = require ('sequelize');
const sequelize = require('../db/db.js');


const Region = sequelize.define('region',
{
    RegionID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING(50),
        allowNull:false
    }
},
{
    tableName: 'region',
    timestamps: false
}
);

module.exports = Region;