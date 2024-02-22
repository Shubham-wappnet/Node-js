const postController=require('../controllers/postController.js')
const router=require('express').Router()

router.post('/addPost',postController.addPost)
router.get('/getPost',postController.getAllPost)
router.get('/:id',postController.getOnePost)
router.put('/:id',postController.updatePost)
router.get('/get/:id', postController.getPostWithUser)

router.patch('/softDelete/:id', postController.postSoftDelete);
router.delete('/hardDelete/:id', postController.postHardDelete);

module.exports=router