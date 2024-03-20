const express=require('express')
const router=express.Router()
const {signUp}=require('../controllers/Controller')


router.post('/',signUp)

module.exports=router
