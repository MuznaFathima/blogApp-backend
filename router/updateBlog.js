const express=require('express')
const router=express.Router()
const {updateBlogPost}=require('../controllers/Controller')


router.put('/:id',updateBlogPost)
module.exports=router