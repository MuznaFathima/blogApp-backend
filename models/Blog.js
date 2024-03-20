
const mongoose=require('mongoose')
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{

        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    category:{

        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

const Blog=mongoose.model('Blog',blogSchema)
module.exports=Blog

