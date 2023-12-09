const express = require ('express');
const router = express.Router();
/*
CREAR CUANDO TENGA EL CREAR ARCHIVO
const upload = require('../middlewares/multer');
*/


//controlador de peticiones 
const productController = require ('../controllers/productController');

router.get('/formCarga', productController.formCarga);
router.get('/cart', productController.cart);
router.get('/libro:id', productController.getOne);
router.get('/all', productController.all);
router.get('/catg', productController.catg);

// /*** GET ALL PRODUCTS ***/ 
// /*** CREATE ONE PRODUCT ***/ 
// /*** GET ONE PRODUCT ***/ 
// /*** EDIT ONE PRODUCT ***/ 
// /*** DELETE ONE PRODUCT***/ 


module.exports = router;