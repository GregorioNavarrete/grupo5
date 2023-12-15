const express = require ('express');
const router = express.Router();

//CREAR CUANDO TENGA EL CREAR ARCHIVO
const upload = require('../middlewares/multer');



//controlador de peticiones 
const adminController = require ('../controllers/adminController');


//*****************Formulario de carga
//para buscar los libros con el nombre
router.get('/search',adminController.search);

// /*** GET ALL PRODUCTS ***/ 
router.get('/formCarga', adminController.formCarga);

// /*** CREATE ONE PRODUCT ***/ 
//router.get('/formCarga', res.render('product-create-form'));    en mi caso no es necesario
router.post('/formCarga',upload.single('portada'), adminController.store); 


// /*** GET ONE PRODUCT ***/ 

// /*** EDIT ONE PRODUCT ***/ 
/*
El edit me esta trayendo problemas con el EJS
quizas tengan que ser 2 paginas diferentes, hay que consultar este problema 
*/
//router.get('/formCarga/:id/edit', productController.edit); 
//router.put('/:id', productsController.update); 



// /*** DELETE ONE PRODUCT***/ 
router.delete('/formCarga/:id', adminController.destroy); 


module.exports = router;