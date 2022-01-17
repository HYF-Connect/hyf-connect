const jwt = require('jsonwebtoken');

const enviroment = require('../config');

const secretKey =  enviroment.SECRET_KEY;

const validToken = async (token) => {
    try {
        const payload = jwt.verify(token, secretKey);

        if (payload.exp > Date.now()) {
        return payload;
        } else {
        throw new Error('Invalid token');
        }
    } catch (error) {
        return false;
    }
};

module.exports = validToken;


