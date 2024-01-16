const path = require('path');
const product = require('../model/productos');
const producto = require('../model/productos');
const productService = require('../data/productService');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const productController = {

    index:  (req, res) => {

        //__dirname una constante node.js, que hace referencia al directorio donde estamos
        let htmlPath = path.resolve(__dirname,'../views/products/index.ejs') ;
        //al estar en la ruta "/" me manda a una direccion de archivo html
        res.render(htmlPath, {libros: producto.getAllProducts()});
      },

     cart:  (req, res) => {
        let htmlPath = path.resolve(__dirname,'../views/products/productCart.ejs') ;
        res.render(htmlPath);
      },

      getOne : (req, res) => {

        res.render('products/productDetail',{product : productService.getOne(req.params.id)});
        //let htmlPath = path.resolve(__dirname,'../views/products/productDetail.ejs') ;
        //res.render(htmlPath);
      },

      all: (req, res) => {
        
        res.render('products/allProduct', {products : productService.getAll()})

      },


      catg: (req, res) => {
      
        let htmlPath = path.resolve(__dirname,'../views/products/categoria.ejs') ;
        res.render(htmlPath);
      },

      indexCatg :(req,res) => {
        
        res.render('products/categoria',{newCatg:productService.catg(req), products : productService.getAll()})

      },

      filtro : (req,res) => {

        if(productService.filter(req).length==0){
          res.render("products/noResult");
        }
        else{
          res.render('products/filtrados',{newObject:productService.filter(req), });
        }
      }
    }





module.exports = productController