const express = require('express')
const router= express.Router();
const authMiddleware = require('../Middleware/authMiddleware')

const {question,getallquestion,querysinglequestion} = require('../controller/questionController') 

router.get("/one-question/:questionid",authMiddleware,querysinglequestion)
router.get("/get-question",authMiddleware,getallquestion)
router.post("/all-question",authMiddleware,question)


module.exports=router