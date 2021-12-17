const bcrypt = require("bcrypt");
const user = require("../models/user");

const saltRounds = 13;

const userManager = {
   createUser: async (firstName, lastName, email, password) => {
      const newUser = { firstName, lastName, email, password };

      newUser.password = await bcrypt.hash(
         newUser.password + newUser.email,
         saltRounds
      );
      await user.create(newUser);

      return newUser;
   },
   getAllUsers: async () => {
      const allUsers = await user.findAll({
         attributes: ["UserID", "FirstName", "LastName", "Password", "Email"],
      });
      return allUsers;
   },
};

module.exports = userManager;
