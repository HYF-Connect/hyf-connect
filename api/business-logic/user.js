const bcrypt = require("bcrypt");
const user = require("../models/user");

const saltRounds = 13;

const userManager = {
   createUser: async ({ FirstName, LastName, Email, Password }) => {
      const newUser = { FirstName, LastName, Email, Password };
      newUser.Password = await bcrypt.hash(
         newUser.Password + newUser.Email,
         saltRounds
      );
      await user.create(newUser);
      return newUser;
   },
   getAllUsers: async () => {
      const allUsers = await user.findAll();
      return allUsers;
   },
};

module.exports = userManager;
