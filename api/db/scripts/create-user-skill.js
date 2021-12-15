const UserSkill = require('../../models/user-skill.js');

const createUserSkill = async () => {
    const userSkill = await UserSkill.bulkCreate([
        {
            UserSillID: 1,
            UserID: 1,
            SkillID: 1,
            Level: 2,
            SelectedSkill: 2
        },
        {
            UserSillID: 2,
            UserID: 3,
            SkillID: 5,
            Level: 5,
            SelectedSkill: 1
        },
        {
            UserSillID: 3,
            UserID: 3,
            SkillID: 5,
            Level: 3,
            SelectedSkill: 3
        }
    ]);
    
    
    return userSkill;
    
    
};

createUserSkill();