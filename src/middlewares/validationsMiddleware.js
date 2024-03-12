const { body } = require('express-validator');


const validations = [
    body('nombre')
    .notEmpty().withMessage('El Nombre no puede estar vacio').bail()
    .isLength({min:2}).withMessage('debe contener al menos 2 caracteres'),
    body('apellido')
    .notEmpty().withMessage('El Apellido no puede estar vacio').bail()
    .isLength({min:2}).withMessage('debe contener al menos 2 caracteres'),
    body('usuario')
    .notEmpty().withMessage('El Nombre de Usuario no puede estar vacio'),
    body('email')
    .notEmpty().withMessage('El Email no puede estar vacio').bail()
    .isEmail().withMessage('Tienes que escribir un formato de correo valido'),
    body('password').trim()
    .notEmpty().withMessage('La Contraseña no puede estar vacia').bail()
    .isLength({min:8}).withMessage('debe contener al menos 8 caracteres').bail()
    .matches(/[A-Z]/).withMessage('Debe contener al menos una mayúscula')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Debe contener al menos un carácter especial'),
    body('imgUser').custom((value,{req})=>{
        
        const filetypes = /jpeg|jpg|png|gif/;
        let extname =  req.file.originalname.toLowerCase().split('.').pop();  
        if(filetypes.test(extname)){
            return true;
        }else{
         throw new Error('debe subir un archivo jpeg,jpg,png,gif')
        }
        
    })
];

module.exports = validations;