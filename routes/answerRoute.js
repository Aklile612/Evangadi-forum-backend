const express = require('express')
const router= express.Router();
const authMiddleware = require('../Middleware/authMiddleware')

const {addanswers,queryallanswers}=require('../controller/answerControl')

router.post("/all-answer/:questionid",authMiddleware,addanswers);
router.get("/single-answers/:questionid",authMiddleware,queryallanswers)

module.exports=router;