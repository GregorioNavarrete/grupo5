const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const uploadUser = require('../middlewares/multerUser');
const path = require('path');
const validations = require('../middlewares/validationsMiddleware');

//es un mid, para restringir "si ya esta loguedo no entra" en "registro y login"
const guestMiddleware = require('../middlewares/guestMiddleware');
//si no tiene a nadie logeado, lo redirigue para q se logue! como ingresar a "Perfil" son loguearse 
const authMiddleware = require('../middlewares/authMiddleware');

//desplegar formulario 
router.get('/login', guestMiddleware, userController.login );

// Procesar el login
router.post('/login', userController.loginProcess);

// Perfil de Usuario
router.get('/profile',  authMiddleware,  userController.profile);

// Logout
router.get('/logout/', userController.logout);



// EDIT ONE USER
//router.get('/search',userController.search);// que hace ? 
router.get('/profile/:id/edit',authMiddleware,userController.edit);
router.post('/profile/:id/edit',uploadUser.single('imgUser'),userController.update);



//CREATE ONE USER

router.get('/register', userController.registro);
router.post('/register',uploadUser.single('imgUser'),validations, userController.processRegister);

//DELETE ONE USER
router.delete('/profile/:id/edit', userController.destroyuser);







module.exports = router;