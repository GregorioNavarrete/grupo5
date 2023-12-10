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

//*****************Formulario de carga
//para buscar los libros con el nombre
router.get('/search',productController.search);

// /*** GET ALL PRODUCTS ***/ 
router.get('/formCarga', productController.formCarga);

// /*** CREATE ONE PRODUCT ***/ 
//router.get('/formCarga', res.render('product-create-form'));    en mi caso no es necesario
router.post('/formCarga',upload.single('portada'), productController.store); 


// /*** GET ONE PRODUCT ***/ 
// /*** EDIT ONE PRODUCT ***/ 
// /*** DELETE ONE PRODUCT***/ 


module.exports = router;