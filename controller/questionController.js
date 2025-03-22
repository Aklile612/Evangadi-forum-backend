const dbConnection =require('../db/dbConfig')
const {StatusCodes} =require('http-status-codes')

//get all question
async function getallquestion(req,res) {

    try {
        
        const [result]=await dbConnection.query(
            `select questions.description,questions.title,users.username 
            from questions 
            join users on questions.userid=users.userid 
            order by questions.id desc;`
        )
        res.status(StatusCodes.ACCEPTED).json({msg:"Successfully acquired questions",result})
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.BAD_REQUEST).json({msg:"Error getting the question"})
    }
    
}

//get single question
async function querysinglequestion(req,res) {
    const {questionid}=req.params;
    const {username}=req.user;
    try {
        const [result]= await dbConnection.query('select description,title from questions where questionid=?',[questionid])
        if (result.length==0){
            res.status(StatusCodes.NOT_FOUND).json({msg:"No questions available"})
        }
        res.status(StatusCodes.ACCEPTED).json({msg:"Question founded",result})
        
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.BAD_REQUEST).json({msg:"Can not get the question"})
    }
}










//add question
async function question(req, res) {
    const questionid=Math.floor(10000+Math.random()*10000).toString();
    const {title,description}=req.body;
    const { username, userid } = req.user;


    if (!title|| !description ||  !questionid){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"please provide all datas"});
    }
    try {
        await dbConnection.query("INSERT INTO questions(userid,questionid,title,description) VALUES(?,?,?,?)",[userid,questionid,title,description]);
        return res.status(StatusCodes.CREATED).json({msg:"Question asked"}) 


    } catch (error) {
        console.log(error.message)
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"invalid Question"})
    }
  
}

module.exports={question,getallquestion,querysinglequestion}