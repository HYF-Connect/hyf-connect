const userManger = require ('../business-logic/login.js');

const validateLogin = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if(!email || ![password]){
            res.status(400).send('Email and password required to login')
            return;
        }
        const allUsers = await userManger.getAllUsers();
        const userMatch = allUsers.find((user) => req.body.email === user.email);
        if (!userMatch){
            res.status(400).json({
                message:'invalid email or password',
            });
            return;
        }
        next();
    } catch (error) {
        res.status(500).json({
            message: 'An error occured trying to  process your request',
        });
    }
};

module.exports = validateLogin;