const { body } = require('express-validator');
const fs = require('fs');
const path = require('path');
const validations = [
    body('title')
        .notEmpty().withMessage('El titulo no puede estar vacio')
        .bail()
        .isLength({ min: 5 }).withMessage('El titulo debe tener más de 5 caracteres'),
    body('descripcion')
        .notEmpty().withMessage('La descripcion no puede estar vacio')
        .bail()
        .isLength({ min: 20 }).withMessage(' debe tener más de 20 caracteres'),

        //porque el sql tiene campos no nulos
        body('precio')
        .notEmpty().withMessage('no puede estar vacio'),
        body('Descuento')
        .notEmpty().withMessage('no puede estar vacio'),
        body('Stock')
        .notEmpty().withMessage('no puede estar vacio'),
        body('paginas')
        .notEmpty().withMessage('no puede estar vacio'),
        body('anoEdicion')
        .notEmpty().withMessage('no puede estar vacio'),
        
        body('Autor')
        .notEmpty().withMessage('selecciona uno'),
        body('edition')
        .notEmpty().withMessage('selecciona uno'),
        body('sagaSerie')
        .notEmpty().withMessage('selecciona uno'),
        body('genero')
        .notEmpty().withMessage('selecciona uno'),
        body('formato')
        .notEmpty().withMessage('selecciona uno'),
        body('idioma')
        .notEmpty().withMessage('selecciona uno'),

        body('portada').custom((value, {req}) => {
            return new Promise((resolve, reject) => {
                if (req.file) {
                    const filetypes = /jpeg|jpg|png|gif/;
                    let extname = req.file.originalname.toLowerCase().split('.').pop();  
                    if(filetypes.test(extname)){
                        resolve(true);
                    } else {
                        let borrar = path.join(__dirname, `../../public/img/portadas/${req.file.filename}`);
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
]
module.exports = validations;