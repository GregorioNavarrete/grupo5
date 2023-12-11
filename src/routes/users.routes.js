const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.get('/login', userController.login );
router.get('/register', userController.registro);
router.get('/List', userController.List);
router.get('/search',userController.search)
router.get('/edit/:idUser',userController.edit)
module.exports = router;