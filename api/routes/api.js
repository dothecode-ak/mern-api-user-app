const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
 
router.get('/', userController.getUserList);
 
// get user by ID
router.get('/:id',userController.getUserByID);
 
 
// get ID for Update 
router.get('/searchRecord/:first_name',userController.getUserByName);
 
// create new user
router.post('/', userController.createNewUser);
 
// update user
router.put('/:id', userController.updateUser);
 
// delete user
router.delete('/:id',userController.deleteUser);

module.exports = router;