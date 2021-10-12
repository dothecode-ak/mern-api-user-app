const UserModel = require('../models/user.model');
 
// get all User list
exports.getUserList = (req, res)=> {
    //console.log('here all Users list');
    UserModel.getAllUsers((err, Users) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Users', Users);
        res.send(Users)
    })
}
 
// get User by Name for search by Name 
exports.getUserByName = (req, res)=>{
    //console.log('get user by id');
    UserModel.getUserByName(req.params.first_name, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single User data',user);
        res.send(user);
    })
}
 
 
// create new User
exports.createNewUser = (req, res) =>{
    const userReqData = new UserModel(req.body);
    console.log('UserReqData', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User Created Successfully', data: user.insertId})
        })
    }
}
 
 
// get User by ID  for Update 
exports.getUserByID = (req, res)=>{
    //console.log('get user by id');
    UserModel.getUserByID(req.params.id, (err, User)=>{
        if(err)
        res.send(err);
        console.log('single User data',User);
        // res.json({"first_name":"Dheeraj"});
       if(User.length==0)
       {
        res.send(JSON.stringify({ status: 200, error: 'Yes', response: 'NA' }));
       }
       else
       {
        res.send(JSON.stringify({ status: 200, error: null, response: User }));
       }
      
    })
}
 
 
// update User
exports.updateUser = (req, res)=>{
    const UserReqData = new UserModel(req.body);
    console.log('UserReqData update', UserReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id, UserReqData, (err, User)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User updated Successfully'})
        })
    }
}
 
// delete User
exports.deleteUser = (req, res)=>{
    UserModel.deleteUser(req.params.id, (err, User)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'User deleted successully!'});
    })
}