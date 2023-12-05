const express = require ('express');
const router = express.Router();
const productController = require ('../controllers/productController');

router.get('/formCarga', productController.formCarga);
router.get('/cart', productController.cart);
router.get('/libro:id', productController.getOne);
router.get('/all', productController.all);
router.get('/catg', productController.catg);
module.exports = router;