const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const uploadUser = require('../middlewares/multerUser');
const { body } = require('express-validator');


const validations = [
    body('nombre').notEmpty().withMessage('el nombre no puede estar vacio'),
    body('apellido').notEmpty().withMessage('el apellido no puede estar vacio'),
    body('usuario').notEmpty().withMessage('el nombre de usuario no puede estar vacio'),
    body('email').notEmpty().withMessage('el nombre no puede estar vacio').bail().isEmail('Tienes que escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('la contraseña no puede estar vacia'),
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

//registro
router.get('/register', userController.registro);
router.post('/register',uploadUser.single('img-user'),validations, userController.processRegister);


router.put('/profile/:id/edit', uploadUser.single('img-user'), userController.update); 
router.delete('/profile/:id/edit', userController.destroyuser)


router.get('/search',userController.search);


module.exports = router;