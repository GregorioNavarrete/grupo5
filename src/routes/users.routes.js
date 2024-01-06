const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const uploadUser = require('../middlewares/multerUser');

router.get('/login', userController.login );
router.get('/register', userController.registro);
router.get('/admin/list');


router.get('/search');//esto depende "/admin/list"
router.get('/edit/:idUser');//esto depende "/admin/list"


router.post('/register',uploadUser.single('img-user'), userController.registrationProcess);




module.exports = router;