const jwt = require('jsonwebtoken');

const environment = require('../config');

const secretKey =  environment.SECRET_KEY;


function createToken(user) {
  const payload = {
    iss: 'Hack Your Future,HYFConnet',
    userId: `${user.UserID}`,
    username: `${user.FirstName} ${user.LastName}`,
    email: `${user.Email}`,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1),
  };

if (secretKey=== undefined){
  console.log("no SECRET_KEY found in environment, please add it into your .env file");
  throw new Error ('No SECRET_KEY found in environment, please add it into your .env file'); 
}
  const token = jwt.sign(payload, secretKey);

  return token;
};

module.exports = createToken;