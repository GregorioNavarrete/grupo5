const path = require('path');
const productService = require('../data/productService');
const fs = require('fs');

const productController = {

  index: async  (req, res) => {
    try {
      let libros = await productService.getAll()
      res.render('products/index', {product: libros});
    } catch (error) {
      console.log(error);
    }
  },

     cart: async (req, res) => {
      try{
        // le tengo que poner funcionalidad xq ya esta la tabla apara esto 
        let htmlPath = path.resolve(__dirname,'../views/products/productCart.ejs') ;
        res.render(htmlPath);
      }catch(e){
        console.log(e);
      }

      },
      cartID: async (req, res) => {
        try{
          // le tengo que poner funcionalidad xq ya esta la tabla apara esto 
          let carrito = await productService.getCarrito(req.params.id);

          res.render('products/productCart',{producto : carrito});
          // let htmlPath = path.resolve(__dirname,'../views/products/productCart.ejs') ;
          // res.render(htmlPath);
        }catch(e){
          console.log(e);
        }
        },

      getOne : async (req, res) => {
        try {
          let aux = await productService.getOne(req.params.id);
          let aux1= await productService.getAll();

          res.render('products/productDetail',{producto :aux ,product: aux1});
          //let htmlPath = path.resolve(__dirname,'../views/products/productDetail.ejs') ;
          //res.render(htmlPath);
        }catch (error){
          console.log(error);
        }

      },
      //esto hay que repetirlo donde requiera todos los libros osea el objto product(utilizamos try catch para todo)
      all: async function (req, res)  {
        try {
          let libros = await productService.getAll()
          
          res.render('products/allProduct', {products : libros});
          // console.log(libros[1]);
          // console.log(libros[2]);
        } catch (error) {
          console.log(error);
        }
      },

      catg: (req, res) => {
      //se usa ? 
        let htmlPath = path.resolve(__dirname,'../views/products/categoria.ejs') ;
        res.render(htmlPath);
      },

      indexCatg :async function (req,res){
        try {
          let newCatg = await productService.catg(req);
          let products = await productService.getAll();

          if(newCatg[0]=== undefined){
            // si no hay librose esa categoria, redirecciono 
            res.redirect('/');
          }
          res.render('products/categoria',{newCatg:newCatg, products : products})

        } catch (error) {
          console.log(error);
        }
      },
      filtro : (req,res) => {
        //no se bien como se implementan
        if(productService.filter(req).length==0){
          res.render("products/noResult");
        }
        else{
          res.render('products/filtrados',{newObject:productService.filter(req) });
        }
      },

      productSearch : (req,res) => {
        //no se bien como se implementan
        res.render("products/searchProducts", {productResult : productService.search(req), products : productService.getAll()} )
      }



    }


module.exports = productController