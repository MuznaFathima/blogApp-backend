
const express=require('express')
const router=express.Router()

const {signIn}=require('../controllers/Controller')

router.post('/',signIn)
module.exports=router

