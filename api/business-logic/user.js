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
      Skill,
      Level,
      SelectedSkill: SelectedSkill,
   }) => {
      const createdUserSkill = await userSkillStore.create({
         UserID: UserID,
         SkillID: Skill,
         Level: Level,
         SelectedSkill: SelectedSkill,
      });
      return createdUserSkill;
   },
   createUserLanguage: async ({ UserID, Language, Level }) => {
      const createdUserLanguage = await userLanguageStore.create({
         UserID: UserID,
         LanguageID: Language,
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
      const allUsers = await user.findAll();
      return allUsers;
   },
   getUserById: async (userId) => {
      const userById = await user.findOne({ where: { UserID: userId } });
      return userById;
   },
   deleteUserSkill: async ({ userId, skillId }) => {
      await userSkillStore.destroy({
         where: { UserID: userId, SkillID: skillId },
      });
      return true;
   },
   deleteUserLanguage: async ({ userId, languageId }) => {
      await userLanguageStore.destroy({
         where: { UserID: userId, LanguageID: languageId },
      });
      return true;
   },
   deleteUserType: async ({ userId, typeId }) => {
      await userTypeStore.destroy({
         where: { UserID: userId, TypeID: typeId },
      });
      return true;
   },
};
module.exports = userManager;
