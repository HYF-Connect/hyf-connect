const userManager = require("../business-logic/user");
const users = require("../models/user");

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
         const { FirstName, LastName, Email, Password } = req.body;
         if (!FirstName || !LastName || !Email || !Password) {
            return res.status(400).json({
               message:
                  "Please, enter a full name, email and password to sign-up!",
            });
         }

         if (
            !Email.toLowerCase().match(
               /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
         ) {
            return res
               .status(400)
               .json({ message: "Please, provide a valid email address!" });
         }
         const userAlreadyExists = await users.findOne({ where: { Email } });
         if (userAlreadyExists) {
            return res
               .status(409)
               .json({ message: "This email address is already being used" });
         }

         if (!(Password.length >= 6)) {
            res.status(400).json({
               message: "Password contains less than 6 characters!",
            });
            return;
         }

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
   getUserById: async (req, res) => {
      try {
         const userId = req.params.userId;
         console.log(userId);
         const result = await userManager.getUserById(userId);
         console.log("result", result);
         return result;
      } catch (error) {
         res.status(400).json({
            message: ` provided could not be found`,
         });
      }
   },
};

module.exports = userController;
