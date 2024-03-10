const { body } = require('express-validator');

const validations = [
    body('titulo')
        .notEmpty().withMessage('El titulo no puede estar vacio')
        .bail()
        .isLength({ min: 5 }).withMessage('El titulo debe tener más de 5 caracteres'),
    body('descripcion')
        .notEmpty().withMessage('La descripcion no puede estar vacio')
        .bail()
        .isLength({ min: 20 }).withMessage(' debe tener más de 20 caracteres'),
]
module.exports = validations;