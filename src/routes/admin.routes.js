const express = require ('express');
const router = express.Router();

//CREAR CUANDO TENGA EL CREAR ARCHIVO
const upload = require('../middlewares/multer');
//este mid, es para q los no-usuario no entren en rutas de "admins y usuarios"
const authMiddleware = require('../middlewares/authMiddleware');
//este mid, es para que los usuarios no entrene en rutas de "admins"
const atenticaadmin = require('../middlewares/atenticaadmin');



//controlador de peticiones 
const adminController = require ('../controllers/adminController');


//direccion a crear libro
router.get('/formCargaLibro', authMiddleware,atenticaadmin,adminController.formCargaLibro);
//*****************Formulario de carga
//para buscar los libros con el nombre
router.get('/search',authMiddleware,atenticaadmin,adminController.search);

// /*** GET ALL PRODUCTS ***/ 
router.get('/formCarga', authMiddleware,atenticaadmin,adminController.formCarga);

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
router.get('/formCarga/:id/edit',authMiddleware,atenticaadmin, adminController.edit); 
router.put('/:id', upload.single('portada'), adminController.update); 

//lista de usuarios de admin /eliminar usuario / editar usuario / buscar usuario 
router.get('/list',authMiddleware,atenticaadmin, adminController.list );
router.delete('/list/:id', adminController.destroyuser);
router.get('/searchUser',adminController.userSearch);



module.exports = router;