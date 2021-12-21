const jwt = require('jsonwebtoken');

const JWT_SECRET = require('../config/tokens');

function createToken(user) {
  const payload = {
    iss: 'Hack Your Future,HYFConnet',
    userId: `${user._id}`,
    username: `${user.username}`,
    email: `${user.email}`,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1),
  };

  const token = jwt.sign(payload, JWT_SECRET);

  return token;
}

module.exports = createToken;