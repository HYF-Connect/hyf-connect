const bcrypt = require('bcryptjs');
const userStore = require ('../models/user.js');
const createToken = require('../utils/create-token.js');


const saltRounds = 13;

const loginManager = {


    comparePassword: async (email,password) => {

        
            console.log('login from busines')
            console.log(password);
            console.log(email);

    const registeredUserData = await userStore.findOne({ where: { Email: email } });
    if (!registeredUserData){
        throw new Error ('Invalid email or password')
    }
    const match = await bcrypt.compare(password+email, registeredUserData.Password);
    if (!match){
        throw new Error ('Invalid email or password')
    }
    
    

    const token = createToken(registeredUserData);

    const userName = registeredUserData.FirstName;
    /*
    jwt.sign({ user +++ }, 'secretKey', (err, token) => {
    res.json({
      token,
    });
    
  });
*/
    return {
        token: token,
        userName, 
        message: `Session created for ${userName}` 
    }
    
        
    }
};

module.exports = loginManager;