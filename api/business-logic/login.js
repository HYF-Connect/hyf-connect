const bcrypt = require ('bcrypt');
const generateToken = require ('../utils/generateToken');
const userStore = require('../models/user.js');

const loginManager = {
    comparePassword: async (email, password) => {
        const dataSubmittedByUser ={
            email,
            password,
        };
        const allUser = await userStore.all();
        const registeredUserData = allUser.find(
            (user)=> user.email === dataSubmittedByUser.email,
        );
        bcrypt.compare(
            dataSubmittedByUser.password,
            registeredUserData.password,
            (err, result) => {
                if (result){
                    console.log ('valid password', result);
                }else {
                    console.error ('Invalid', err);
                }
            },
        );
        const token = generateToken(registeredUserData);
        return {token};
    },
    
};

module.exports = loginManager;