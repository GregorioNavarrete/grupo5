const multer=require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null, path.join(__dirname, '../../public/img/users'))
    },
    filename : (req,file,cb) => {
        let newFileName = 'group-' + Date.now() + path.extname(file.originalname);
        cb(null,newFileName)

    }
});
const uploadUser = multer({storage : storage});

module.exports = uploadUser;