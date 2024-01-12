const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const uploadUser = require('../middlewares/multerUser');

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
router.get('/admin/list');


router.get('/search');//esto depende "/admin/list"
router.get('/edit/:idUser');//esto depende "/admin/list"


router.post('/register',uploadUser.single('img-user'), userController.registrationProcess);


router.post('/register', userController.create);

// router.get('/profile/:id/edit', userController.edit); 
// router.put('/:id', upload.single('user'), userController.update); 



router.get('/register/:id/edit', userController.edit); 
router.put('/:id', uploadUser.single('img-user'), userController.update); 


module.exports = router;