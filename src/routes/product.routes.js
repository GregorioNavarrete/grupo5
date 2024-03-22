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
router.get('/cart/home/:id', authMiddleware,productController.cartID);// para agregar un libro al carrito 
router.get('/cart/:id/:id_producto', authMiddleware,productController.AddCarrito);// para agregar un libro al carrito 

router.get('/cart/cantidad/:tabla/:cant/:id', productController.Cantidad);//para modificar la cantidad de libros del carrito
router.get('/cart/delete/:id/:user', productController.DeletCarrito);//para eliminar un elemento del carrito


router.get('/libro/:id', productController.getOne);
// router.get('/all', productController.all);

router.get('/filter',productController.filtro);// no se bien como hacerlo 
router.get('/catg',productController.indexCatg); 

router.get("/search", productController.productSearch)

router.get('/autor/:id', productController.author);

router.post('/libro/:id',productController.sendComment)

module.exports = router;