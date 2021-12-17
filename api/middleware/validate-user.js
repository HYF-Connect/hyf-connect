// eslint-disable-next-line filenames/match-regex
const userManager = require("../business-logic/user");

// eslint-disable-next-line consistent-return
const validateUser = async (req, res, next) => {
   try {
      const { firstName, lastName, email, password } = req.body;

      if (!firstName || !lastName || !email || !password) {
         res.status(400).send(
            "Please, enter a full name, email and password to sing-up!"
         );
      } else {
         // check if the user already exists
         const allUsers = await userManager.getAllUsers();

         const userAlreadyExists = await allUsers.findOne({ where: { email } });

         if (userAlreadyExists) {
            return res
               .status(409)
               .json({ message: "This email address is already being used" });
         }

         next();
      }
   } catch (error) {
      return res.status(500).json({
         message: "An error occurred trying to process your request",
      });
   }
};

module.exports = validateUser;
