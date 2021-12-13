const sequelize = require ('../db.js');

//loading different models in sequelize

const User = require('../../models/user.js');




// create tables

const createTables = async () => {
    const result = await sequelize.sync({force: true});
};

createTables().then(()=>{
    process.exit();
});