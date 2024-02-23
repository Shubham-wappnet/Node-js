const userController=require('../controllers/userController.js')
const router=require('express').Router()
const authenticateJWT = require('../middleware/authMiddleware')


router.post('/addUser',userController.addUser)
router.post('/queryData',userController.queryData)
router.get('/getUser',userController.getAllUser)
router.get('/searchData',userController.searchData)
router.get('/:id',userController.getOneUser)
router.put('/:id', userController.updateUser)
router.get('/get/:id', userController.viewUserPostById)
router.post('/validate',userController.validateUser)

router.post('/signup',userController.signup)
router.post('/login',userController.login)
router.get('/profile',authenticateJWT,userController.profile)

router.patch('/softDelete/:id', userController.userSoftDelete);
router.delete('/hardDelete/:id', userController.userHardDelete);

module.exports=router