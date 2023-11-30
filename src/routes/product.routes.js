const express = require ('express');
const router = express.Router();
const productController = require ('../controllers/productController');

router.get('/cart', productController.cart);
router.get('/:id', productController.getOne);

module.exports = router;