const { Sequelize } = require("sequelize");
const sequelize = require("../db/db.js");

const Nationality = require("./nationality.js");
const Language = require("./language.js");
const Class = require("./class.js");
const Region = require("./region.js");
const UserLanguage = require("./user-language.js");
const Type = require("./type.js");
const Skill = require("./skill.js");
const Project = require("./project.js");

const User = sequelize.define(
   "user",
   {
      UserID: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
      },
      FirstName: {
         type: Sequelize.STRING(50),
         allowNull: false,
      },
      LastName: {
         type: Sequelize.STRING(50),
         allowNull: false,
      },
      Password: {
         type: Sequelize.STRING(256),
         allowNull: false,
      },
      Email: {
         type: Sequelize.STRING(50),
         allowNull: false,
         unique: true,
      },
      NationalityID: {
         type: Sequelize.INTEGER,
         allowNull: true,
      },
      ProfilePicture: {
         type: Sequelize.BLOB,
         allowNull: true,
      },
      Bio: {
         type: Sequelize.STRING(256),
         allowNull: true,
      },
      GithubURL: {
         type: Sequelize.STRING(2048),
         allowNull: true,
      },
      LinkedinURL: {
         type: Sequelize.STRING(2048),
         allowNull: true,
      },
      WebsiteURL: {
         type: Sequelize.STRING(2048),
         allowNull: true,
      },
      ClassID: {
         type: Sequelize.INTEGER,
         allowNull: true,
      },
      JobTitle: {
         type: Sequelize.STRING(50),
         allowNull: true,
      },
      RegionID: {
         type: Sequelize.INTEGER,
         allowNull: true,
      },
   },
   {
      tableName: "user",
      timestamps: false,
   }
);

/**
 * Creating the connection between the user table
 * and the other tables such as nationality, language and project
 * using one to many categorise and tags
 */

User.belongsTo(Nationality, {
   as: "Nationality",
   foreignKey: "NationalityID",
});

User.belongsTo(Class, {
   as: "Class",
   foreignKey: "ClassID",
});

User.belongsTo(Region, {
   as: "Region",
   foreignKey: "RegionID",
});

User.belongsToMany(Language, {
   as: "Languages",
   through: UserLanguage,
   uniqueKey: "UserLanguageID",
   foreignKey: "UserID",
   otherKey: "LanguageID",
});

User.belongsToMany(Type, {
   as: "Type",
   through: "UserType",
   uniqueKey: "UserTypeID",
   foreignKey: "UserID",
   otherKey: "TypeID",
});

User.belongsToMany(Skill, {
   as: "Skill",
   through: "UserSkill",
   uniqueKey: "UserSkillID",
   foreignKey: "UserID",
   otherKey: "SkillID",
});

User.belongsToMany(Project, {
   as: "Project",
   through: "UserProject",
   uniqueKey: "UserProjectID",
   foreignKey: "UserID",
   otherKey: "ProjectID",
});
module.exports = User;
