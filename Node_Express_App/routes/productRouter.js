const productController=require('../controllers/productController.js')
const reviewController=require('../controllers/reviewController.js')
const router=require('express').Router()

//user route
router.post('/addProduct',productController.addProduct)
router.get('/getProduct',productController.getAllProduct)
router.get('/getpublishProduct',productController.getPublishProduct)


router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

router.get('/getProductReviews/:id', productController.getProductReviews)


// Products router
router.get('/:id', productController.getOneProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router