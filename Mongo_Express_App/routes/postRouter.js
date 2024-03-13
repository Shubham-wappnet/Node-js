const postController=require('../controllers/postController.js')
const fileUpload=require('../middleware/multer.js')
const router=require('express').Router();

router.post('/addPost',postController.addPost)
router.get('/getAllPost',postController.getAllPost)
router.patch('/uploadFile',fileUpload,postController.uploadFiles)


module.exports=router;