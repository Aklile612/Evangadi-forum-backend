const dbConnection =require('../db/dbConfig')
const bcrypt= require('bcrypt')
const {StatusCodes} =require('http-status-codes')



async function question(req, res) {
    const {title,description,tag,questionid}=req.body;
    const { username, userid } = req.user;


    if (!title|| !description || !tag|| !questionid){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"please provide all datas"});
    }
    try {
        await dbConnection.query("INSERT INTO questions(userid,questionid,title,description,tag) VALUES(?,?,?,?,?)",[userid,questionid,title,description,tag]);
        return res.status(StatusCodes.CREATED).json({msg:"Question asked"}) 


    } catch (error) {
        console.log(error.message)
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"invalid Question"})
    }
  
}

module.exports={question}