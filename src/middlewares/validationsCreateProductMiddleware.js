const { body } = require('express-validator');

const validations = [
    body('title')
        .notEmpty().withMessage('El titulo no puede estar vacio')
        .bail()
        .isLength({ min: 5 }).withMessage('El titulo debe tener más de 5 caracteres'),
    body('descripcion')
        .notEmpty().withMessage('La descripcion no puede estar vacio')
        .bail()
        .isLength({ min: 20 }).withMessage(' debe tener más de 20 caracteres'),

        //porque el sql tien campos no nulos
        body('subtitle')
        .notEmpty().withMessage('no puede estar vacio'),
        body('precio')
        .notEmpty().withMessage('no puede estar vacio'),
        body('Descuento')
        .notEmpty().withMessage('no puede estar vacio'),
        body('Stock')
        .notEmpty().withMessage('no puede estar vacio'),
        body('paginas')
        .notEmpty().withMessage('no puede estar vacio')
]
module.exports = validations;