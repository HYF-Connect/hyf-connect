const UserType = require('../../models/user-type.js');

const CreateUserType = async ()=>{
    try {
        return await UserType.bulkCreate([
        {UserTypeID: 1, UserID: 2,TypeID:3},
        {UserTypeID: 2,UserID: 5,TypeID:1}
    ]);
    
    } catch (error) {
        console.log(error);
    }
    
    
};

CreateUserType();
