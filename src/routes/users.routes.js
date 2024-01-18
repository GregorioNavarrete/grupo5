const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const uploadUser = require('../middlewares/multerUser');
const { body } = require('express-validator');


const validations = [
    body('nombre').notEmpty(),
    body('apellido').notEmpty(),
    body('usuario').notEmpty(),
    body('email').notEmpty(),
    body('password').notEmpty(),
    body('confirm-password').notEmpty(),
]


//es un mid, para restringir "si ya esta loguedo no entra" en "registro y login"
const guestMiddleware = require('../middlewares/guestMiddleware');
//si no tiene a nadie logeado, lo redirigue para q se logue! como ingresar a "Perfil" son loguearse 
const authMiddleware = require('../middlewares/authMiddleware');


//desplegar formulario 
router.get('/login', guestMiddleware, userController.login );

// Procesar el login
router.post('/login', userController.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, userController.profile);

// Logout
router.get('/logout/', userController.logout);

router.get('/search',userController.search);


router.get('/register', userController.registro);
router.post('/register',uploadUser.single('img-user'), userController.registrationProcess);


router.get('/register/:id/edit', userController.edit); 
router.put('/:id', uploadUser.single('img-user'), userController.update); 

router.put('/profile/:id/edit', uploadUser.single('img-user'), userController.update); 
router.delete('/profile/:id/edit', userController.destroyuser)


router.get('/search',userController.search);


module.exports = router;