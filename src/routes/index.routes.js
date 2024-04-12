const express = require ('express');
const router = express.Router();
const productController = require ('../controllers/productController');
const productRoutes = require ('./product.routes');
const usersRoutes = require ('./users.routes');
const adminRoutes = require ('./admin.routes');
const apiRoutes = require('./api.routes');
const paymentRoutes = require('../routes/payment.routes');


router.get('/', productController.index );

router.use('/product', productRoutes );
router.use('/user', usersRoutes );
router.use('/admin', adminRoutes );
router.use('/api',apiRoutes)
router.use('/payment',paymentRoutes);

module.exports = router;