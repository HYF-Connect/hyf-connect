const userManager = require("../business-logic/user");
const users = require("../models/user");

const userController = {
   getAll: async (req, res) => {
      try {
         const allUsers = await userManager.getAllUsers();
         res.send(JSON.stringify(allUsers, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
   getById: async (req, res) => {
      const userId = req.params.userId;
      console.log("controllers", userId);
      try {
         const result = await userManager.getUserById(userId);
         res.status(200).json(result);
      } catch (error) {
         res.status(400).json({
            message: `${userId} provided could not be found`,
         });
      }
   },
   getSkills: async (req, res) => {
      const userId = req.params.userId;
      try {
         const allUserSkills = await userManager.getAllUserSkills(userId);
         res.send(JSON.stringify(allUserSkills, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
   getLanguages: async (req, res) => {
      const userId = req.params.userId;
      try {
         const allUserLanguages = await userManager.getAllUserLanguages(userId);
         res.send(JSON.stringify(allUserLanguages, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
   getTypes: async (req, res) => {
      const userId = req.params.userId;
      try {
         const allUserTypes = await userManager.getAllUserTypes(userId);
         res.send(JSON.stringify(allUserTypes, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
   postRegister: async (req, res) => {
      try {
         const { FirstName, LastName, Email, Password } = req.body;
         if (!FirstName || !LastName || !Email || !Password) {
            return res.status(400).json({
               message:
                  "Please, enter a full name, email and password to sign-up!",
            });
         }
         if (
            !Email.toLowerCase().match(
               /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
         ) {
            return res
               .status(400)
               .json({ message: "Please, provide a valid email address!" });
         }
         const userAlreadyExists = await users.findOne({ where: { Email } });
         if (userAlreadyExists) {
            return res
               .status(409)
               .json({ message: "This email address is already being used" });
         }
         if (!(Password.length >= 6)) {
            res.status(400).json({
               message: "Password contains less than 6 characters!",
            });
            return;
         }
         const user = await userManager.createUser({
            FirstName: FirstName,
            LastName: LastName,
            Password: Password,
            Email: Email,
         });
         res.status(200).json(
            `Congratulation ${user.FirstName}, your account has been successfully created!`
         );
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
   postSkill: async (req, res) => {
      try {
         const { Skill, Level, SelectedSkill } = req.body;
         const UserID = req.params.userId;
         const userSkill = await userManager.createUserSkill({
            UserID: UserID,
            SkillID: Skill,
            Level: Level,
            SelectedSkill: SelectedSkill,
         });
         res.status(200).json(userSkill);
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
   postLanguage: async (req, res) => {
      try {
         const { Language, Level } = req.body;
         const UserID = req.params.userId;
         const userLanguage = await userManager.createUserLanguage({
            UserID: UserID,
            LanguageID: Language,
            Level: Level,
         });
         res.status(200).json(userLanguage);
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
   postType: async (req, res) => {
      try {
         const { Type } = req.body;
         const UserID = req.params.userId;
         const userType = await userManager.createUserType({
            UserID: UserID,
            TypeID: Type,
         });
         res.status(200).json(userType);
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
   putUserProfile: async (req, res) => {
      try {
         const {
            Nationality,
            ProfilePicture,
            Bio,
            GithubURL,
            LinkedinURL,
            WebsiteURL,
            Class,
            JobTitle,
            Region,
         } = req.body;
         const userId = req.params.userId;
         const userProfile = await userManager.updateUserProfile({
            UserID: userId,
            Nationality: Nationality,
            ProfilePicture: ProfilePicture,
            Bio: Bio,
            GithubURL: GithubURL,
            LinkedinURL: LinkedinURL,
            WebsiteURL: WebsiteURL,
            Class: Class,
            JobTitle: JobTitle,
            Region: Region,
         });
         res.status(200).json(
            `Congratulation ${userProfile.FirstName}, your profile has been successfully updated!`
         );
      } catch (error) {
         res.status(400).json({
            message: error.message,
         });
      }
   },
   putSkill: async (req, res) => {
      try {
         const { Skill, Level, SelectedSkill } = req.body;
         const UserID = req.params.userId;
         const userSkill = await userManager.updateUserSkill({
            UserID: UserID,
            SkillID: Skill,
            Level: Level,
            SelectedSkill: SelectedSkill,
         });
         res.status(200).json(
            `Skill ${userSkill.SkillID} has been successfully updated!`
         );
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
   putLanguage: async (req, res) => {
      try {
         console.log("body", req.body);
         console.log("userId", req.params.userId);
         /*          const { Language, Level } = req.body;
         const UserID = req.params.userId;
         const userLanguage = await userManager.updateUserLanguage({
            UserID: UserID,
            LanguageID: Language,
        /*     Level: Level,
         }); */
         res.status(200).json(`Language has been successfully updated!`);
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
   putType: async (req, res) => {
      try {
         const { Type } = req.body;
         const UserID = req.params.userId;
         const userType = await userManager.updateUserType({
            UserID: UserID,
            TypeID: Type,
         });
         res.status(200).json(
            `Type ${userType.TypeID} has been successfully updated!`
         );
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
   deleteUserProfile: async (req, res) => {
      try {
         const { userId } = req.params;
         await userManager.deleteUserProfile({
            UserID: userId,
         });
         res.status(200).json({
            message: `User with id ${userId} was successfully deleted!`,
         });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
   deleteSkill: async (req, res) => {
      try {
         const { skillId, userId } = req.params;
         await userManager.deleteUserSkill({
            UserID: userId,
            SkillID: skillId,
         });
         res.status(200).json({
            message: `Skill with id ${skillId} was successfully deleted!`,
         });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
   deleteLanguage: async (req, res) => {
      try {
         const { languageId, userId } = req.params;
         await userManager.deleteUserLanguage({
            UserID: userId,
            LanguageID: languageId,
         });
         res.status(200).json({
            message: `Language with id ${languageId} was successfully deleted!`,
         });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
   deleteType: async (req, res) => {
      try {
         const { typeId, userId } = req.params;
         await userManager.deleteUserType({
            UserID: userId,
            TypeID: typeId,
         });
         res.status(200).json({
            message: `Type with id ${typeId} was successfully deleted!`,
         });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
      }
   },
};

module.exports = userController;
