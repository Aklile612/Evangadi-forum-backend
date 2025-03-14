const dbConnection =require('../db/dbConfig')
const {StatusCodes} =require('http-status-codes')

async function answers(req,res) {
    const {username,userid} =req.user
    const {questionid,answer}=req.body;

    if(!questionid || !answer){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"please provide all datas"});
    }

    try {
        await dbConnection.query("insert into answers(userid,questionid,answer) values(?,?,?)",[userid,questionid,answer])
        return res.status(StatusCodes.ACCEPTED).json({msg:"answer registered"})
    } catch (error) {
        console.log(error.message)
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"Invalid Request"})
    }

}

module.exports={answers}