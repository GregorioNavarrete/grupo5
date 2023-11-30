const path = require('path');


const productController = {

    index :  (req, res) => {
        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/products/index.html') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.sendFile(htmlPath);
      },

     cart:  (req, res) => {
        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/products/productCart.html') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.sendFile(htmlPath);
      },

      getOne : (req, res) => {
        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/products/productDetail.html') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.sendFile(htmlPath);
      }
}


module.exports = productController