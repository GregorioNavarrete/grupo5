const { body } = require('express-validator');

const validations = [
    body('nombre').notEmpty().withMessage('El Nombre no puede estar vacio'),
    body('apellido').notEmpty().withMessage('El Apellido no puede estar vacio'),
    body('usuario').notEmpty().withMessage('El Nombre de Usuario no puede estar vacio'),
    body('email').notEmpty().withMessage('El Email no puede estar vacio').bail().isEmail().withMessage('Tienes que escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('La Contraseña no puede estar vacia'),

]
module.exports = validations;