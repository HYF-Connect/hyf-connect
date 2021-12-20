const loginManager = require('../business-logic/login');
const loginController = {
    post: async (req, res)=>{
        try {
            const {email, password} = req.body;
            const result = await loginManager.comparePassword(email, password);
            if (!result){
                res.status(401).json({
                    message: 'Please provide a correct username or password',
                });
            } else {
                res.status(200).json(result);
            }
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    }
}


module.exports= loginController;