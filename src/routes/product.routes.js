const express = require ('express');
const router = express.Router();
const productController = require ('../controllers/productController');

router.get('/cart', productController.cart);
router.get('/libro:id', productController.getOne);
router.get('/all', productController.all);

module.exports = router;