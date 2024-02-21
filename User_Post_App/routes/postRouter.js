const postController=require('../controllers/postController.js')
const router1=require('express').Router()

router1.post('/addPost',postController.addPost)
router1.get('/getPost',postController.getAllPost)
router1.get('/:id',postController.getOnePost)
router1.get('/:id',postController.updatePost)
router1.get('/:id',postController.deletePost)

module.exports=router1