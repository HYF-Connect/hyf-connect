// eslint-disable-next-line filenames/match-regex
//const userManager = require("../business-logic/user");
const users = require("../models/user");

// eslint-disable-next-line consistent-return
const validateUser = async (req, res, next) => {
   try {
      const { FirstName, LastName, Email, Password } = req.body;
      if (!FirstName || !LastName || !Email || !Password) {
         return res
            .status(400)
            .send("Please, enter a full name, email and password to sing-up!");
      }
      const userAlreadyExists = await users.findOne({ where: { Email } });
      if (userAlreadyExists) {
         return res
            .status(409)
            .json({ message: "This email address is already being used" });
      }

      next();
   } catch (error) {
      return res.status(500).json({
         message: "An error occurred trying to process your request",
      });
   }
};
module.exports = validateUser;
