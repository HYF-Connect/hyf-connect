const validToken = require('../utils/validate-token.js');
const userStore =require("../models/user");



const authenticateAccess = async (req, res, next) => {
  const header = req.get("Authorization")
;

  if ( header === undefined) { 
    res.status(401).send({
    message: 'Unauthorized access, authorization header is required',
    });
    return;
  }

  const tokenArray = header.split(" ");

  if (tokenArray[0] !== 'Bearer' || tokenArray.length !== 2) {
    res.status(401).send({
    message: 'Unauthorized',
    });
    return;
  }

  const token = tokenArray[1];

  const verifiedToken = await validToken(token);

  if (verifiedToken) {
    //fetching the users database for checking the authenticated user's information
    req.loggedInUser = await userStore.findOne({ where: { Email:verifiedToken.email } });

    next();
  } else {
    return res.status(403).send({
      message: 'Unauthorized, invalid token',
    });
  }
};

module.exports = authenticateAccess;

