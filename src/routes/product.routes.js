const express = require ('express');
const router = express.Router();

//CREAR CUANDO TENGA EL CREAR ARCHIVO
const upload = require('../middlewares/multer');



//controlador de peticiones 
const productController = require ('../controllers/productController');


router.get('/cart', productController.cart);
router.get('/libro/:id', productController.getOne);
router.get('/all', productController.all);
router.get('/catg', productController.catg);




module.exports = router;