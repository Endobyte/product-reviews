var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')
const reviewController = require('../controllers/reviewController')

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/products');
});
router.get('/products', productController.viewProducts)
router.get('/products/profile/:id', productController.renderProfile);
router.get('/products/edit/:id', productController.renderEditForm);
router.get('/products/add', productController.renderAddForm);
router.get('/products/delete/:id', productController.deleteProduct);
router.get('/products/:productId/review/add', reviewController.renderAddReviewForm);
router.get('/reviews/edit/:id', reviewController.renderEditReviewForm);
router.get('/reviews/delete/:id', reviewController.deleteReview);
router.post('/products/:productId/review/add', reviewController.addReview);
router.post('/products/edit/:id', productController.updateProduct);
router.post('/products/add', productController.addProduct);
router.post('/reviews/edit/:id', reviewController.updateReview);

module.exports = router;
