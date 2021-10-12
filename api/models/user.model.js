var dbConn  = require('../database/config');
 
var User = function(user){
    this.first_name     =   user.first_name;
    this.last_name      =   user.last_name;
    this.email          =   user.email;
    this.phone          =   user.phone;
    this.address         =   user.address;
}
 
// get all users
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM users', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(null,err);
        }else{
            console.log('users fetched successfully');
            result(null,res);
        }
    })
}
 
// get User by Name for Search Data by name 
User.getUserByName = (first_name, result)=>{
    dbConn.query('SELECT * FROM users WHERE first_name=?', first_name, (err, res)=>{
        if(err){
            console.log('Error while fetching user by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}
 
// create new User
User.createUser = (userReqData, result) =>{
    console.log(userReqData);
    dbConn.query('INSERT INTO users SET ?', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })
}
 
 
// get User by ID for update
User.getUserByID = (id, result)=>{
    dbConn.query('SELECT * FROM users WHERE id=?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching User by id', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}
 
 
// update User
User.updateUser = (id, UserReqData, result)=>{
    dbConn.query("UPDATE users SET first_name=?,last_name=?,email=?,phone=?,address=? WHERE id = ?", [UserReqData.first_name,UserReqData.last_name,UserReqData.email,UserReqData.phone,userReqData.address, id], (err, res)=>{
        if(err){
            console.log('Error while updating the User');
            result(null, err);
        }else{
            console.log("User updated successfully");
            result(null, res);
        }
    });
}
 
// delete User
User.deleteUser = (id, result)=>{
    dbConn.query('DELETE FROM users WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the user');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}
 
module.exports = User;