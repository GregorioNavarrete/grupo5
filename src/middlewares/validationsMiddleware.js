const { body } = require('express-validator');
const fs = require('fs');
const path = require('path');


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
    body('imgUser').custom((value, {req}) => {
        return new Promise((resolve, reject) => {
            if (req.file) {
                const filetypes = /jpeg|jpg|png|gif/;
                let extname = req.file.originalname.toLowerCase().split('.').pop();  
                if(filetypes.test(extname)){
                    resolve(true);
                } else {
                    let borrar = path.join(__dirname, `../../public/img/users/${req.file.filename}`);
                    fs.unlink(borrar, (err) => {
                        if (err) {
                            console.error(err);
                        }
                        reject(new Error('debe subir un archivo jpeg,jpg,png,gif'));
                    });
                }
            } else {
                resolve(true);
            }
        });
    })
];

module.exports = validations;