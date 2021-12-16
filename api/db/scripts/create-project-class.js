const projectClass = require('../../models/project-class.js');

const createProjectClass = async () => {
    const projectClass = await projectClass.bulkCreate([
        {ProjectClassID: 1, ClassID: 3, ProjectID: 2},
        {ProjectClassID: 2, ClassID: 2, ProjectID: 1}
    ]);
    return projectClass
};

createProjectClass();