const express = require('express');
const router = express.Router();
const{getAllBlogPosts}=require('../controllers/Controller')

router.get('/', getAllBlogPosts);
module.exports = router;
