const bcrypt = require("bcryptjs");
const userStore = require("../models/user");
const userSkillStore = require("../models/user-skill");
const userLanguageStore = require("../models/user-language");
const userTypeStore = require("../models/user-type");

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
   createUserSkill: async ({
      UserID,
      SkillID,
      Level,
      SelectedSkill: SelectedSkill,
   }) => {
      const createdUserSkill = await userSkillStore.create({
         UserID: UserID,
         SkillID: SkillID,
         Level: Level,
         SelectedSkill: SelectedSkill,
      });
      return createdUserSkill;
   },
   createUserLanguage: async ({ UserID, LanguageID, Level }) => {
      const createdUserLanguage = await userLanguageStore.create({
         UserID: UserID,
         LanguageID: LanguageID,
         Level: Level,
      });
      return createdUserLanguage;
   },
   createUserType: async ({ UserID, TypeID }) => {
      const createdNewUserType = await userTypeStore.create({
         UserID: UserID,
         TypeID: TypeID,
      });
      return createdNewUserType;
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
      const allUsers = await userStore.findAll();
      return allUsers;
   },
   getUserById: async (userId) => {
      const userById = await userStore.findOne({ where: { UserID: userId } });
      return userById;
   },
   deleteUserProfile: async ({ UserID }) => {
      await userStore.destroy({
         where: { UserID: UserID },
      });
      return true;
   },
   deleteUserSkill: async ({ UserID, SkillID }) => {
      await userSkillStore.destroy({
         where: { UserID: UserID, SkillID: SkillID },
      });
      return true;
   },
   deleteUserLanguage: async ({ UserID, LanguageID }) => {
      await userLanguageStore.destroy({
         where: { UserID: UserID, LanguageID: LanguageID },
      });
      return true;
   },
   deleteUserType: async ({ UserID, TypeID }) => {
      await userTypeStore.destroy({
         where: { UserID: UserID, TypeID: TypeID },
      });
      return true;
   },
};
module.exports = userManager;
