const Skill = require('../../models/skill.js');


const createSkills = async() =>{
    try {
        return await Skill.bulkCreate([
            {SkillID: 1, Name: 'HTML'},
            {SkillID: 2, Name: 'CSS'},
            {SkillID: 3, Name: 'UI/UX'},
            {SkillID: 4, Name: 'Javascript'},
            {SkillID: 5, Name: 'Node'},
            {SkillID: 6, Name: 'React'},
            {SkillID: 7, Name: 'PYTHON'},
            {SkillID: 8, Name: 'Databasa MONGO'},
            {SkillID: 9, Name: 'Database SQL'},
            {SkillID: 10, Name: 'PHP'},
            {SkillID: 11, Name: 'Java'},
            {SkillID: 12, Name: 'Github Documentation'},
        ]);
    } catch (error) {
        console.log(error);
    }
};

createSkills();