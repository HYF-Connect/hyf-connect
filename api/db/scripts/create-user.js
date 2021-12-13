const User = require ('../../models/user.js');

const createUsers = async ()=>{
    return await User.bulkCreate([
        {
            FirstName: 'Sami',
            LastName: 'Sari',
            Email: 'sami@gmail.com',
            NationalityID: 1
        },
        {
            FirstName: 'Rami',
            LastName: 'Rari',
            Email: 'Rami@gmail.com',
            NationalityID: 5
        },
        {
            FirstName: 'Yami',
            LastName: 'Yari',
            Email: 'yami@gmail.com',
            NationalityID: 4
        }
    ]);
};

createUsers();