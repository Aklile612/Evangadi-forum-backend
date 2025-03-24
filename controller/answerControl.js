const dbConnection =require('../db/dbConfig')
const {StatusCodes} =require('http-status-codes')
//add answers
async function addanswers(req,res) {
    const {questionid}=req.params;
    const {username,userid} =req.user
    const {answer}=req.body;

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
//see answers
async function queryallanswers(req,res) {
    const {questionid}=req.params;
    try {
        const [result] = await dbConnection.query(`
            SELECT users.username, answers.answer, questions.title, questions.description
            FROM questions
            LEFT JOIN answers ON answers.questionid = questions.questionid
            LEFT JOIN users ON answers.userid = users.userid
            WHERE questions.questionid = ?
            ORDER BY answers.answerid DESC;`,[questionid]);
            
        if (result.length===0){
            res.status(StatusCodes.NOT_FOUND).json({msg:"NO question found",})
            return;
        }
        res.status(StatusCodes.OK).json({msg:"answer found",result})
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.NOT_FOUND).json({msg:"NO answers recorded"})
    }
}

module.exports={addanswers,queryallanswers}