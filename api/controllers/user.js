const userManager = require("../business-logic/user");

const userController = {
   get: async (req, res) => {
      try {
         const allUsers = await userManager.getAllUsers();
         res.send(JSON.stringify(allUsers, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
   post: async (req, res) => {
      try {
         const { firstName, lastName, email, password } = req.body;
         const user = await userManager.createUser(
            firstName,
            lastName,
            email,
            password
         );
         res.status(200).json(
            `Congratulation ${user.firstName}, your account has been successfully created!`
         );
      } catch (error) {
         res.status(500).send(error);
      }
   },
};

module.exports = userController;
