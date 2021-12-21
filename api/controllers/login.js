const loginManager = require('../business-logic/login.js');


const loginController = {
post: async (req, res) => {

    try {
        const body = req.body
        const email = body.Email;
        const password = body.Password;

        // console.log(`${password} from controller`);

        const result = await loginManager.comparePassword(email,password);
        if (!result) {
        res.status(401).json({
            message: 'Please, enter a correct Email or password',
        });
        } else {
            res.status(200).json(result);
        }
        
        } catch (error) {
            console.log('login controller break')
            res.status(500).json({ error: error.message });
        }
        
    },
    
};

module.exports=loginController;

