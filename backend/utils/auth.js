const jwt=require("jsonwebtoken");
require('dotenv').config();
 

function generateAccessToken(userId){
    return jwt.sign({userId:userId},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'30m'});
}
function generateRefreshToken(userId){
    return jwt.sign({userId:userId},process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'});
}
function verifyToken(token,secret){
    try{
        const decoded=jwt.verify(token,secret);
        
        return decoded; 
    }catch(error){
        console.log("token verification failed",error);
        return;
    }
}
module.exports={
    generateAccessToken,
    generateRefreshToken,
    verifyToken
}