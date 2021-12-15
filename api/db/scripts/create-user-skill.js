const UserSkill = require('../../models/user-skill.js');

const CreateUserSkill = async () => {
    const userSkill = await UserSkill.bulkCreate([
        {
            UserSillID: 1,
            UserID: 1,
            SkillID: 1,
            Level: 'Junior',
            SelectedSkill: 2
        },
         {
            UserSillID: 2,
            UserID: 3,
            SkillID: 5,
            Level: 'Senior',
            SelectedSkill: 1
        },
         {
            UserSillID: 3,
            UserID: 3,
            SkillID: 5,
            Level: 'Mid',
            SelectedSkill: 3
        }
    ]);
    
    try {
        return userSkill;
    
    } catch (error) {
        console.log(error);
    }
};

CreateUserSkill();