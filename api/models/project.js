const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Class = require("./class.js");
const Skill = require("./skill.js");
const ProjectClass = require('./project-class.js');


const Project = sequelize.define(
    "porject",
    {
    ProejctID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    Title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Describtion: {
        type: DataTypes.STRING(265),
        allowNull: true,
    },
    GithubURL: {
        type: DataTypes.STRING(2048),
        allowNull: true,
    },
    WebsiteURL: {
        type: DataTypes.STRING(2048),
        allowNull: true,
    },
    Thumbnail: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    },
    {
        tableName: "Project",
        timestamps: false,
    }
);

/**
 * Creating the connection between the project table
 * and the other tables such as team"users", skill and class
 * using one to many categorise and tags
 */



Project.belongsToMany(Class, {
    as: "Class",
    through: ProjectClass,
    uniqueKey: "ProjectClassID",
    foreignKey: "ProjectID",
    otherKey: "ClassID",
});



Project.belongsToMany(Skill, {
    as: "Skill",
    through: "ProjectSkill",
    uniqueKey: "ProjectSkillID",
    foreignKey: "ProjectID",
    otherKey: "SkillID",
});


module.exports = Project;