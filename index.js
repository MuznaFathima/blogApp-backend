const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')



const signupRouter=require('./router/routes')
const signinRouter=require('./router/signin')
const blogRoutes=require('./router/addblog')
const getAllBlogPostsRoutes=require('./router/getallblog')
const getBlogPostByIdRoutes=require('./router/getblogbyid')
const deleteBlogByIdRoutes=require('./router/deleteblog')
const updateBlogByIdRoutes=require('./router/updateBlog')




const app=express()
const PORT=process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use('/signup',signupRouter)
app.use('/signin',signinRouter)

app.use('/uploads', express.static('uploads'));
app.use('/blogs', blogRoutes);
app.use('/getblog',getAllBlogPostsRoutes)
app.use('/blog',getBlogPostByIdRoutes)
app.use('/delete',deleteBlogByIdRoutes)
app.use('/update',updateBlogByIdRoutes)




mongoose.connect('mongodb+srv://ktmuznafathima:muznakt@cluster0.fv2uuvt.mongodb.net/design-login-project?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('mongodb is connected')).catch((err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})


