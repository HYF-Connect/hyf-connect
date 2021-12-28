const userManager = require("../business-logic/user");
const users = require("../models/user");

const userProfileController = {
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
         const { FirstName, LastName, Email, Password } = req.body;
         const user = await userManager.createUser({
            FirstName: FirstName,
            LastName: LastName,
            Password: Password,
            Email: Email,
         });
         console.log(user);
         res.status(200).json(
            `Congratulation ${user.FirstName}, your account has been successfully created!`
         );
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
};

module.exports = userProfileController;
