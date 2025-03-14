const express = require('express')
const router= express.Router();
const authMiddleware = require('../Middleware/authMiddleware')

const {answers}=require('../controller/answerControl')

router.post("/all-answer",authMiddleware,answers);

module.exports=router;