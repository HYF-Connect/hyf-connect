const loginManager = require("../business-logic/login.js");

const loginController = {
   post: async (req, res) => {
      console.log("we are in the login!");
      try {
         const body = req.body;
         const email = body.Email;
         const password = body.Password;

         const result = await loginManager.comparePassword(email, password);
         if (!result) {
            res.status(401).json({
               message: "Please, enter a correct Email or password",
            });
         } else {
            res.status(200).json(result);
         }
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
};

module.exports = loginController;
