const path = require('path');

const userController = {

    login : (req, res) => {
        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/users/login.ejs') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.render(htmlPath);
      },

    registro: (req, res) => {
        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/users/register.ejs') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.render(htmlPath);
      }
}

module.exports = userController