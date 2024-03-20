const express=require('express')
const router=express.Router()
const upload=require('../multer/multer')
const {addBlogPost}=require('../controllers/Controller')

router.post('/addblog',upload.single('file'),addBlogPost)

module.exports=router
