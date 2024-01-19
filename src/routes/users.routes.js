const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const uploadUser = require('../middlewares/multerUser');
const { body } = require('express-validator');
const path = require('path')


const validations = [
    body('nombre').notEmpty().withMessage('El Nombre no puede estar vacio'),
    body('apellido').notEmpty().withMessage('El Apellido no puede estar vacio'),
    body('usuario').notEmpty().withMessage('El Nombre de Usuario no puede estar vacio'),
    body('email').notEmpty().withMessage('El Email no puede estar vacio').bail().isEmail().withMessage('Tienes que escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('La Contraseña no puede estar vacia'),
    body('imgUser').custom((value, {req})=>{
        let file = req.file
        let acceptedExtensions = ["jpg","png","gif"]
        if(!file){
            throw new Error('Tienes que subir una imagen')
        }else{
            let fileExtensions = path.extname(file.originalname)
            if(acceptedExtensions.includes(fileExtensions)){
                throw new Error('Las extenciones de archivo permitidas son ${acceptedExtensions.join(',')}')
            }
        }

        
        return true;
    })
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

//registro
router.get('/register', userController.registro);
router.post('/register',uploadUser.single('imgUser'),validations, userController.processRegister);





// EDIT ONE USER
//router.get('/search',userController.search);// que hace ? 
router.get('/profile/:id/edit',userController.edit);//esto depende "/admin/list"
router.post('/profile/:id/edit',userController.update);
router.delete('/profile/:id/edit', userController.destroyuser)


module.exports = router;