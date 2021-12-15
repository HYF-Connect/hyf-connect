const Project = require ('../../models/project.js');

const createProject = async () => {
    const project = await Project.bulkCreate([
        {
            ProjectID:1,
            Title: 'HYF Connect',
            Describtion: 'class 15 members created this project',
        },
        {
            ProjectID:2,
            Title: 'cats and dogs',
            Describtion: 'class 14 members created this project',
        },
        {
            ProjectID:3,
            Title: 'test test',
            Describtion: 'class 13 members created this project',
        }
    ]);
};


createProject();