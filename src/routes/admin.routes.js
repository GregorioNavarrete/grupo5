const express = require ('express');
const router = express.Router();

//CREAR CUANDO TENGA EL CREAR ARCHIVO
const upload = require('../middlewares/multer');



//controlador de peticiones 
const adminController = require ('../controllers/adminController');


//direccion a crear libro
router.get('/formCargaLibro', adminController.formCargaLibro);
//*****************Formulario de carga
//para buscar los libros con el nombre
router.get('/search',adminController.search);

// /*** GET ALL PRODUCTS ***/ 
router.get('/formCarga', adminController.formCarga);

// /*** CREATE ONE PRODUCT ***/ 
//router.get('/formCarga', res.render('product-create-form'));    en mi caso no es necesario
router.post('/formCarga',upload.single('portada'), adminController.store); 


// /*** DELETE ONE PRODUCT***/ 
router.delete('/formCarga/:id', adminController.destroy); 



// /*** EDIT ONE PRODUCT ***/ 
/*
El edit me esta trayendo problemas con el EJS
quizas tengan que ser 2 paginas diferentes, hay que consultar este problema 
*/
router.get('/formCarga/:id/edit', adminController.edit); 
router.put('/:id', upload.single('portada'), adminController.update); 


router.get('/list', adminController.list );
router.delete('/list/:id', adminController.destroy)



module.exports = router;