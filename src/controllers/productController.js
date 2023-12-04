const path = require('path');

const product = require('../model/productos');
const producto = require('../model/productos');

const productController = {

    index :  (req, res) => {

        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/products/index.ejs') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.render(htmlPath, {libros: producto.getAllProducts()});
      },

     cart:  (req, res) => {
        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/products/productCart.ejs') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.render(htmlPath);
      },

      getOne : (req, res) => {
         //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/products/productDetail.ejs') ;
         //al estar en la ruta "/" me manda a una direccion de archivo html
         res.render(htmlPath);
      },

      all: (req, res) => {
        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/products/allProduct.ejs') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.render(htmlPath);

      },
      formCarga : (req, res) => {
        
        let htmlPath = path.resolve(__dirname,'../views/products/FormularioDeCarga.ejs') ;
        res.render(htmlPath);
      }
}


module.exports = productController