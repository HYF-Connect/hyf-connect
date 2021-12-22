const userManager = require('../business-logic/user');

const validateLogin = async (req, res, next) => {
    try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
        res.status(400).send({message: 'Email and password are required to login!'});
        return;
    }
    const allUsers = await userManager.getAllUsers();
    const userMatch = allUsers.find((user) => req.body.Email === user.Email);
    if (!userMatch) {
        res.status(400).json({
        message: 'Invalid email or password',
        });
        return;
    }
    next();
    } catch (error) {
    res.status(500).json({
        message: 'An error occurred trying to process your request',
    });
    }
};

module.exports = validateLogin;