const postController=require('../controllers/postController.js')
const router=require('express').Router();

router.post('/addPost',postController.addPost)
router.get('/getAllPost',postController.getAllPost)

module.exports=router;