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
   updateUserPicture: async (userId, ProfilePicture) => {
      const userById = await userStore.findOne({ where: { UserID: userId } });
      const updatedUser = await userById.update({
         ProfilePicture,
      });
      return updatedUser;
   },
   updateUserSkills: async (UserID, skills) => {
      await userSkillStore.destroy({
         where: { UserID: UserID },
      });
      for (let skill in skills) {
         await userSkillStore.create({
            UserID: UserID,
            SkillID: skill.value,
         });
      }
      return true;
   },
   updateUserLanguages: async (UserID, languages) => {
      await userLanguageStore.destroy({
         where: { UserID: UserID },
      });
      for (let lang in languages) {
         await userLanguageStore.create({
            UserID: UserID,
            LanguageID: lang.value,
         });
      }
      return true;
   },
   updateUserTypes: async ({ UserID, types }) => {
      await userTypeStore.destroy({
         where: { UserID: UserID },
      });
      for (let type in types) {
         await userTypeStore.create({
            UserID: UserID,
            TypeID: type.value,
         });
      }
      return true;
   },
   getAllUsers: async () => {
      const allUsers = await userStore.findAll();
      return allUsers;
   },
   getAllUserSkills: async (userId) => {
      const allUserSkills = await userSkillStore.findAll({
         where: { UserID: userId },
      });
      return allUserSkills;
   },
   getAllUserLanguages: async (userId) => {
      const allUserLanguages = await userLanguageStore.findAll({
         where: { UserID: userId },
      });
      return allUserLanguages;
   },
   getAllUserTypes: async (userId) => {
      const allUserTypes = await userTypeStore.findAll({
         where: { UserID: userId },
      });
      return allUserTypes;
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
