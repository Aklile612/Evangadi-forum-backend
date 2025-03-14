

const dbConnection =require('../db/dbConfig')
const bcrypt= require('bcrypt')
const {StatusCodes} =require('http-status-codes')
const jwt = require('jsonwebtoken')


async function register(req,res) {
    const {username,firstname,lastname,email,password}= req.body;
    if (!username|| !password || !firstname ||!lastname || !email){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"please all datas provided"});
    }
    try {
        
        const [user]= await dbConnection.query("SELECT userid,username FROM users WHERE username=? or email=?",[username,email])
        if(user.length > 0){
            return res.status(StatusCodes.BAD_REQUEST).json({msg:"user already exists"})
        }
        if (password.length <= 8){
            return res.status(StatusCodes.BAD_REQUEST).json({msg:"password must be greater than 8"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)
        await dbConnection.query("INSERT INTO users(username,firstname,lastname,email,password) VALUES(?,?,?,?,?)",[username,firstname,lastname,email,hashedPassword])
        return res.status(StatusCodes.CREATED).json({msg:"User created"})   

    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"something went wrong try again later"})
    }
}
async function login(req,res) {
    const {email,password}=req.body;
    if (!password || !email){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"please provide all datas"});
    }
    try {
        const [user] =await dbConnection.query("select password,userid,username from users where  email=?",[email])
        if(user.length == 0){
            return res.status(StatusCodes.BAD_REQUEST).json({msg:"invalid credential"})
        }
        const comparePassword= await bcrypt.compare(password,user[0].password);
        if(!comparePassword){
            return res.status(StatusCodes.BAD_REQUEST).json({msg:"please enter the correct password"})
        }

        const username=user[0].username;
        const userid=user[0].userid;
        // console.log(process.env.JWT_SECRET)
        const token =jwt.sign({username,userid},"secret",{expiresIn:"10d"})

        return res.status(StatusCodes.ACCEPTED).json({msg:"you have sucessfully signed in",token})
        
        



    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"something went wrong"})
        
    }
}
function checkUser(req,res) {
    const username=req.user.username;
    const userid=req.user.userid;
    
    return res.status(StatusCodes.OK).json({msg:"user checked",username,userid})
}

module.exports= {register,login,checkUser};