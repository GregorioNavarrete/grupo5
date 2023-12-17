const express = require ('express');
const router = express.Router();

//CREAR CUANDO TENGA EL CREAR ARCHIVO
const upload = require('../middlewares/multer');

const productService = require ('../data/productService');


//controlador de peticiones 
const productController = require ('../controllers/productController');


router.get('/cart', productController.cart);
router.get('/libro/:id', productController.getOne);
router.get('/all', productController.all);
router.get('/catg', productController.catg);
router.get('/Filtro',productService.filter)
router.get('/detail/:idLibro',productService.detail)

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
/*
El edit me esta trayendo problemas con el EJS
quizas tengan que ser 2 paginas diferentes, hay que consultar este problema 
*/
//router.get('/formCarga/:id/edit', productController.edit); 
//router.put('/:id', productsController.update); 



// /*** DELETE ONE PRODUCT***/ 
router.delete('/formCarga/:id', productController.destroy); 


module.exports = router;