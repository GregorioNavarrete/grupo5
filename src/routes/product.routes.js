const express = require ('express');
const router = express.Router();

//CREAR CUANDO TENGA EL CREAR ARCHIVO
const upload = require('../middlewares/multer');

const productService = require ('../data/productService');
//este mid, es para q los no-usuario no entren en rutas de "admins y usuarios"

const authMiddleware = require('../middlewares/authMiddleware');


//controlador de peticiones 
const productController = require ('../controllers/productController');


//router.get('/cart/', productController.cart);// para ir a ver al carrito
//visualisar lista del carrito 
router.get('/cart/home/:id', authMiddleware,productController.cartID);
//agregar al carrito
router.post('/cart/:id/:id_producto', authMiddleware,productController.AddCarrito);
//Edit cant carrito y stok
router.put('/cart/cantidad/:tabla/:cant/:id', productController.Cantidad);
// eliminar del carrito nos xq no reconose a "id"
router.delete('/cart/delete/:id/:ID', productController.BorrarCarrito);


router.get('/libro/:id', productController.getOne);
// router.get('/all', productController.all);

/* router.get('/filter',productController.filtro);  */
router.get('/catg',productController.indexCatg); 

router.get("/search", productController.productSearch)

router.get('/autor/:id', productController.author);

router.post('/libro/:id',productController.sendComment)

module.exports = router;