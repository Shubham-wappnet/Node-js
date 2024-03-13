
const Post=require('../models/postModel.js')
const path=require('path')

const addPost = async (req, res) => {
    try {
        const { postId,title, description, status,userId } = req.body
        const newPost = new Post({
            postId,
            title,
            description,
            status,
            userId
        });
        
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get all post
const getAllPost=async(req,res)=>{
    try{
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 2;
        const skip = (page - 1) * pageSize;  // like offset

        const posts = await Post.find()
            .sort({ updatedAt: 1 })
            .skip(skip)
            .limit(pageSize)
            

        if (posts && posts.length > 0) {
            res.status(200).send(posts);
        } else {
            res.status(404).json({ error: "Posts not found" });
        }
    }
    catch(error){
        console.error("Error occurred while fetching posts:", error);
        res.status(500).json({ error: "Internal server error" });
    }
     
}

const uploadFiles = async (req, res) => {
    try {
        const files = req.files;
        console.log(files);
        const id = (req.body.id);
        const filePaths = files.map(file => file.path);
        // const postfiles = {
        //     "Files": filePaths
        // }
        const updatepost=await Post.findByIdAndUpdate({_id:id},{filepath:filePaths},{new:true});
        if(updatepost){
            res.status(200).json({message:"file uploaded successfully"})
        }
        else{
            res.status(404).json({message:"post not found"})
        }
    } 
    catch (error) {
        console.error("Error occurred while sending files:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}



module.exports = {addPost,getAllPost,uploadFiles};