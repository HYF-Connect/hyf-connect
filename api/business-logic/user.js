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
   createUserProfile: async () => {
      const newUserProfile = await user.create(newUserProfile);
   },
   getAllUsers: async () => {
      const allUsers = await user.findAll();
      return allUsers;
   },
   getUserById: async (userId) => {
      const userById = await user.findOne({ where: { UserID: userId } });
      console.log("business-logic", userById);
      return userById;
   },
};

module.exports = userManager;
