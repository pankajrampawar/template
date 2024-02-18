const  {Router}=require("express");
const {signup,signin, userStatus, updateDetails,getUsers,getuserDetails}=require("../controllers/user.controller");
const {authMiddleware}=require("../middlewares/usermiddleware");
const userRoutes=Router();

userRoutes.route('/signup').post(signup);
userRoutes.route('/signin').post(signin);
userRoutes.route('/userStatus').get(authMiddleware, userStatus)
//userRoutes.route('/').post(authMiddleware,updateDetails);
//userRoutes.route('/bulk').get(authMiddleware,getUsers);
//userRoutes.route('/userdetails').get(authMiddleware,getuserDetails);
module.exports=userRoutes; 
