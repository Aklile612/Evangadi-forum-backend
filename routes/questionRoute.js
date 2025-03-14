const express = require('express')
const router= express.Router();
const authMiddleware = require('../Middleware/authMiddleware')

const {question} = require('../controller/questionController') 



router.post("/all-question",authMiddleware,question)


module.exports=router