const express = require('express');
const router = express.Router();

const{deleteBlogPostById}=require('../controllers/Controller')
router.delete('/:id', deleteBlogPostById);

module.exports=router