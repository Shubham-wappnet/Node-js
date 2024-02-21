const db=require('../models')
const Post=db.post

const addPost = async (req, res) => {
    try {
        let info = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            desg: req.body.desg,
            
        };

        const post = await Post.create(info);
        console.log(post);

        res.status(201).send(post);
        return;
    } catch (error) {
        console.error('Error adding post:', error);
        res.status(500).send('Error adding post');
    }
};

const getAllPost=async(req,res)=>{
    let post=await Post.findAll({})
    res.status(200).send(post)
}

const getOnePost=async(req,res)=>{
    let id=req.params.id
    let post=await Post.findOne({where:{id:id}})
    res.status(200).send(post)
}

const updatePost=async(req,res)=>{
    let id=req.params.id
    let post=await Post.update(req.body,{where:{id:id}})
    res.status(200).send(post)
}

const deletePost=async(req,res)=>{
     let id=req.params.id
     await Post.destroy({where:{id:id}})
     res.status(200).send('post is deleted')
}
module.exports={addPost,getAllPost,getOnePost,updatePost,deletePost}