
const User=require('../models/user')
const Blog=require('../models/Blog')




const signUp=async(req,res)=>{

 try{
    const{username,email,password}=req.body

    const user=new User({username,email,password})
    await user.save()
    res.status(201).json({message:'user registered successfully'})
 }catch(err){
    console.log(err);
    res.status(500).json({message:'error registering the user'})
 }

}



const signIn=async(req,res)=>{
    try{
        const{email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
           return res.status(401).json({message: 'invalid email'})
        }


        if(password===user.password){
            return res.status(201).json({message:'Login Successful'})
        }else{
            return res.status(400).json({message:'incorrect password'})
        }
    }catch(err){
        console.log(err);
    }
}

const addBlogPost=async (req,res)=>{

    try{

        const{title,author,date,category,content}=req.body
        const imageUrl = req.file ? req.file.path : '';

        // Validate if imageUrl is provided
        if (!imageUrl) {
            return res.status(400).json({ message: 'Image URL is required' });
        }


        const newBlogPost=new Blog({
            title,
            author,
            date,
            category,
            imageUrl,
            content
        })

        await newBlogPost.save()
        res.status(201).json({message:"Blog post added successfully!"})
    }catch(error){
        console.error('Error adding blog post',error);
        res.status(500).json({
            message:'Failed to add blog post'
        })
    }
}



const getAllBlogPosts = async (req, res) => {
    try {
        const blogPosts = await Blog.find();
        res.status(200).json(blogPosts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ message: 'Failed to fetch blog posts' });
    }
};


const getBlogPostById=async(req,res)=>{
    try{
        const {id}=req.params;
        const blogPost=await Blog.findById(id)
        if(!blogPost){
            return res.status(404).json({ message: 'Blog post not found' });
        }
        res.status(200).json(blogPost);
    }catch(error){
        console.error('Error fetching blog post by ID:', error);
        res.status(500).json({ message: 'Failed to fetch blog post by ID' });
    }
}


const deleteBlogPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlogPost = await Blog.findByIdAndDelete(id);
        if (!deletedBlogPost) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog post:', error);
        res.status(500).json({ message: 'Failed to delete blog post' });
    }
};

const updateBlogPost=async(req,res)=>{

    const {id}=req.params
    const{title,author,date,category,content}=req.body

    try{
        const updateBlogPostById= await Blog.findByIdAndUpdate(id, { title, author, date, category, content }, { new: true })

        if(updateBlogPostById){
            res.status(200).json({ message: 'Blog post updated successfully', updateBlogPostById });
        } else {
            res.status(404).json({ message: 'Blog post not found' });
        }
    }catch(error){
        console.error('Error updating blog post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports={signUp,signIn,addBlogPost,getAllBlogPosts,getBlogPostById,deleteBlogPostById,updateBlogPost}

