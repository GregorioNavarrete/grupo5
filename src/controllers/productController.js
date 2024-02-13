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

      getOne : (req, res) => {

        res.render('products/productDetail',{producto : productService.getOne(req.params.id),product: productService.getAll()});
        //let htmlPath = path.resolve(__dirname,'../views/products/productDetail.ejs') ;
        //res.render(htmlPath);
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

      productSearch : (req,res) => {

        res.render("products/searchProducts", {productResult : productService.search(req), products : productService.getAll()} )
      },

      author: async  (req, res) => {
        try {
          let autor = await productService.authors(req.params.id)
          res.render('products/authors', {autor : autor})
        } catch (error) {    
        }
      }


    }


module.exports = productController