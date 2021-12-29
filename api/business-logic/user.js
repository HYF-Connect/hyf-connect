const bcrypt = require("bcryptjs");
const userStore = require("../models/user");

const saltRounds = 13;

const userManager = {
   createUser: async ({ FirstName, LastName, Email, Password }) => {
      const newUser = { FirstName, LastName, Email, Password };
      newUser.Password = await bcrypt.hash(
         newUser.Password + newUser.Email,
         saltRounds
      );
      await userStore.create(newUser);
      return newUser;
   },
   updateUserProfile: async ({
      UserID,
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
      const userById = await userStore.findOne({ where: { UserID: UserID } });
      const updatedProfile = await userById.update({
         NationalityID: Nationality,
         ProfilePicture,
         Bio,
         GithubURL,
         LinkedinURL,
         WebsiteURL,
         ClassID: Class,
         JobTitle,
         RegionID: Region,
      });
      return updatedProfile;
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
