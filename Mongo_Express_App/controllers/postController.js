
// const db = require('../models/index.js');
//const Post = db.posts;
const Post=require('../models/postModel.js')

const addPost = async (req, res) => {
    try {
        const { title, description, status,userId, file_path } = req.body
        const newPost = new Post({
            title,
            description,
            status,
            userId,
            file_path
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
            .sort({ updatedAt: -1 })
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

// get post by id
const getPostById=async(req,res)=>{
      try{
        
      }
      catch(error){}
}


module.exports = {addPost,getAllPost,getPostById};