const path = require('path');
const productService = require('../data/productService');
const fs = require('fs');

const productController = {

  index: async  (req, res) => {
    try {
      let libros = await productService.getAll()
      res.render('products/index', {product: libros});
    } catch (error) {
      
    }
  },

     cart:  (req, res) => {
        let htmlPath = path.resolve(__dirname,'../views/products/productCart.ejs') ;
        res.render(htmlPath);
      },

      getOne :async  (req, res) => {
        try {
          let id = req.params.id
          let libros = await productService.getAll()
          let libro = await productService.getOne(id)
          res.render('products/productDetail',{producto : libro,product: libros });
        } catch (error) {
          
        }

      },
      //esto hay que repetirlo donde requiera todos los libros osea el objto product(utilizamos try catch para todo)
      all: async function (req, res)  {
        try {
          let libros = await productService.getAll()
          console.log(libros);
          res.render('products/allProduct', {products : libros})
          console.log(libros.price);
        } catch (error) {
          
        }
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
          res.render('products/filtrados',{newObject:productService.filter(req) });
        }
      },

      productSearch : async (req,res) => {
        try {
          let busqueda = await productService.search(req);
          let productos = await productService.getAll();
          res.render("products/searchProducts", {productResult : busqueda , products :productos } )
        } catch (error) {
          
        }

      },

      author: async  (req, res) => {
        try {
          let autor = await productService.authors(req.params.id)
          res.render('products/authors', {autor : autor})
                console.log('hola');
                console.log(autor);
        } catch (error) {
          
        }
      } //ignorar esto es temporar para poder ver la vista de autores


    }


module.exports = productController