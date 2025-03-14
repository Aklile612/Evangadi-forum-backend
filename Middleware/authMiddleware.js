require('dotenv').config();
const {StatusCodes}=require('http-status-codes')
const jwt = require('jsonwebtoken');



async function authMiddleware(req,res,next){

    const authHeader=req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(StatusCodes.UNAUTHORIZED).json({msg:"unauthorized 1 user"})
    }

    const token= authHeader.split(' ')[1]
    // console.log(token)
    // console.log(authHeader)
    try {
        // console.log(process.env.JWT_SECRET)
        const {username,userid} = jwt.verify(token,"secret");
        req.user={username,userid};
        // return res.status(StatusCodes.ACCEPTED).json({data});
        next();
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({msg:"unauthorized 2 user"})
    }
    
}
module.exports=authMiddleware;