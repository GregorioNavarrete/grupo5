const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.get('/login', userController.login );
router.get('/register', userController.registro);
router.get('/admin/list', userController.List);
router.get('/search',userController.search);
router.get('/edit/:idUser',userController.edit);


router.post('/register', userController.create);




module.exports = router;