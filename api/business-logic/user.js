const bcrypt = require("bcryptjs");
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
   createUserProfile: async ({
      Nationality,
      ProfilePicture,
      Bio,
      GithubURL,
      LinkedinURL,
      WebsiteURL,
      Class,
      JobTitle,
      Region,
   }) => {
      const newUserProfile = {
         Nationality,
         ProfilePicture,
         Bio,
         GithubURL,
         LinkedinURL,
         WebsiteURL,
         Class,
         JobTitle,
         Region,
      };
      await user.create(newUserProfile);
      console.log("business-logic", newUserProfile);
      return newUserProfile;
   },
   getAllUsers: async () => {
      const allUsers = await user.findAll();
      return allUsers;
   },
   getUserById: async (userId) => {
      const userById = await user.findOne({ where: { UserID: userId } });
      return userById;
   },
};
module.exports = userManager;
