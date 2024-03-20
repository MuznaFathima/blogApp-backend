const express=require('express')

const router=express.Router()
const{getBlogPostById}=require('../controllers/Controller')

router.get('/:id',getBlogPostById)
module.exports=router

