const userController=require('../controllers/userController.js')
const validateRegistration=require('../middleware/validation.js')
const authenticateJWT=require('../middleware/authMiddleware.js')
const router=require('express').Router()


router.post('/addUser',userController.addUser)
router.post('/queryData',userController.queryData)
router.get('/getUser',userController.getAllUser)
router.get('/searchData',userController.searchData)
router.get('/:id',userController.getOneUser)
router.put('/:id', userController.updateUser)
router.get('/get/:id', userController.viewUserPostById)

router.post('/signup',validateRegistration,userController.signup)
router.post('/login',userController.login)
router.patch('/newPassword',userController.changePassword)
router.post('/forgotPassword',userController.forgotPassword)

router.patch('/softDelete/:id', userController.userSoftDelete);
router.delete('/hardDelete/:id', userController.userHardDelete);

module.exports=router

