const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');

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

router.get('/register', userController.registro);
router.get('/admin/list', userController.List);


router.get('/search',userController.search);//esto depende "/admin/list"
router.get('/profile/:id/edit',userController.edit);//esto depende "/admin/list"


router.post('/register', userController.create);

// router.get('/profile/:id/edit', userController.edit); 
// router.put('/:id', upload.single('user'), userController.update); 




module.exports = router;