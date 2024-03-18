const db=require('../models')
const Post=db.post
const User=db.user

// addPost
const addPost = async (req, res) => {
    try {
        const { title, description, status, userId } = req.body;
        const newPost=new Post({title,description,status,userId});
        await newPost.save();
        res.status(201).json({
            success: true,
            message: 'Post created successfully',
            newPost
        });
    } catch (error) {
        console.error(error); 
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};


//get all posts
const getAllPost = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 2;

        const offset = (page - 1) * pageSize;

        const posts = await Post.findAll({ offset: offset, limit: 2, order: [['updatedAt','DESC']] });
        if (posts && posts.length>0) {
            res.status(200).send(posts);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error("Error occurred while fetching posts:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

//get post by id
const getOnePost = async (req, res) => {
    try {
        const id = req.params.id;
        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: "Invalid id format. Please provide an integer value." });
        }
        const post = await Post.findOne({ attributes: ['postId', 'title', 'description'], where: { postId: id, status: "Active" } });
        if (post) {
            res.status(200).send(post);
        }
        else {
            res.status(404).json({ error: "Post not found." })
        }

    } catch (error) {
        console.error("Error occurred while fetching user post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// update post
const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: "Invalid id format. Please provide an integer value." });
        }
        const updatedPosts = await Post.update(req.body, { where: { postId: id, status: "Active" } });

        if (updatedPosts > 0) {
            res.status(200).json({
                success: true,
                message: "Post updated succefully",
                post: updatedPosts[0]
            })
        }
        else {
            res.status(404).json({ error: "Post not found" })
        }
    } catch (error) {
        console.error("Error occurred while processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// get post data with user's info
const getPostWithUser = async (req, res) => {
    try {
        const id = req.params.id;
        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: "Invalid id format. Please provide an integer value." });
        }
        const post = await Post.findOne(
            {
                attributes: ['postId', 'title', 'description'],
                include: [{
                    model: User,
                    as: 'userDetails',
                    attributes: ['id', 'name', 'email', 'phone']
                }],
                where: { postId: id, status: "Active" }
            }
        );
        if (post) {
            res.status(200).send(post);
        }
        else {
            res.status(404).json({ error: "Post not found." })
        }
    }
    catch (error) {
        console.error("Error occurred while fetching posts:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// soft delete
const postSoftDelete = async (req, res) => {
    try {
        const id = req.params.id;
        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: "Invalid id format. Please provide an integer value." });
        }
        const softDeletePost = await Post.update({ status: "Deleted" }, { where: { postId: id, status: "Active" } });

        if (softDeletePost > 0) {
            console.log(softDeletePost);
            res.status(200).json({
                success: true,
                message: 'Post soft deleted successfully',
                user: softDeletePost[0]
            });
        } else {
            res.status(404).json({ error: "Post not found" });
        }

    } catch (error) {
        console.error("Error occurred while processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


//  hard delete
const postHardDelete = async (req, res) => {
    try {
        const id = req.params.id;
        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: "Invalid id format. Please provide an integer value." });
        }

        const hardDeletePost = await Post.destroy({ where: { postId: id } });
        if (hardDeletePost > 0) {
            console.log(hardDeletePost);
            res.status(200).json({
                success: "true",
                message: 'Post deleted successfully',
                count: hardDeletePost
            })
        }
        else {
            res.status(404).json({ error: "Post not found" });
        }

    } catch (error) {
        console.error("Error occurred while processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


// apload files
const uploadFiles = async (req, res) => {
    try {
      const id = req.params.id;
      const { files } = req;
      const filePaths = files.map(file => file.path); // Get file paths
  
      console.log(filePaths);
  
      // Update the Post record with the file paths using Sequelize
      await Post.update({ file_path: filePaths.join(',') }, { where: { postId: id } });
      
      res.status(201).json({ message: 'Files uploaded successfully' });
    } catch (error) {
        console.error(error)
      console.error('Error uploading files:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  


module.exports={addPost,
                getAllPost,
                getOnePost,
                updatePost,
                getPostWithUser,
                postSoftDelete,
                postHardDelete,
                uploadFiles
            }