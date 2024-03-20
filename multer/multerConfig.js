const multer=require('multer')


const storage=multer.diskStorage({

    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
})


const fileFilter=(req,file,cb)=>{
if(file.mimetype==='image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
    cb(null,true)
}
else{
    cb(new Error('Only JPEG,JPG and PNG file formats are allowed!'),false)
}


}


const multerConfig=multer({
    storage,
    fileFilter
})

module.exports=multerConfig 



