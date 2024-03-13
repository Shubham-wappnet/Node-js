const userController=require('../controllers/userController.js')
const validateRegistration=require('../middleware/validation.js')
const sessionAuthentication=require('../middleware/session.js')
const router=require('express').Router();


router.post('/addUser',validateRegistration,userController.addUser)
router.post('/signup',validateRegistration,userController.signup)
router.post('/login',sessionAuthentication,userController.login)
router.get('/getData',userController.getAllUser)
router.get('/getuser',sessionAuthentication,userController.getUserByemail)
router.post('/otpsend',userController.sendOtp)
router.post('/logout',sessionAuthentication,userController.logout)
router.patch('/softDelete', sessionAuthentication, userController.softDelete);
router.delete('/hardDelete', sessionAuthentication, userController.hardDelete);

module.exports=router;