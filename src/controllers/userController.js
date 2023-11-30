const path = require('path');

const userController = {

    login : (req, res) => {
        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/users/login.html') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.sendFile(htmlPath);
      },

    registro: (req, res) => {
        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/users/register.html') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.sendFile(htmlPath);
      }
}

module.exports = userController