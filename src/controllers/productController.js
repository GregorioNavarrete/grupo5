const path = require('path');
const product = require('../model/productos');
const producto = require('../model/productos');
const productService = require('../data/productService');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const productController = {

    index :  (req, res) => {

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
        let htmlPath = path.resolve(__dirname,'../views/products/productDetail.ejs') ;
         res.render(htmlPath);
      },

      all: (req, res) => {
        
        let htmlPath = path.resolve(__dirname,'../views/products/allProduct.ejs') ;
        res.render(htmlPath);

      },
      

      formCarga : (req, res) => {
        //para mostrar los elementos enlistados

        res.render('products/FormularioDeCarga',{product : productService.getAll()});
        //let htmlPath = path.resolve(__dirname,'../views/products/FormularioDeCarga.ejs') ;
        //res.render(htmlPath);
      },

      catg: (req, res) => {
      
        let htmlPath = path.resolve(__dirname,'../views/products/categoria.ejs') ;
        res.render(htmlPath);
      },
      search: (req, res)=>{
        
        res.render('products/FormularioDeCarga',{product : productService.seach(req)})
        
      },
      store: (req, res)=>{
        // al metodo "save" le poso por parametro el OBJ "body" que obtengo del POST
        productService.save(req);
        //res.send(req.body); //Para ver si lo modifico, que si
        res.redirect('/product/FormCarga');
      },
      destroy : (req, res) => {
        // Do the magic
        productService.delete(req.params.id);
        res.send("El producto fue eliminado con exito");
      },
      edit: (req, res) => {
        // Do the magic
        res.render('products/FormularioDeCarga', ({productToEdit : productService.getOne(req.params.id)}));
      },
      filter : (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let generos = req.query.genero;
         let autores = req.query.autor;
        let formato = req.query.formato;
        let editorial = req.query.editoriales; 

        let filtrados=[];
        
    
        for(let i=0; i < products.length;i++ ){
          if(products[i].genero == generos   || products[i].autor == autores || products[i].formato == formato || products[i].editorial == editorial ){
                filtrados.push(products[i]);
                
          }
          
        }
        if(filtrados.length==0){
          res.render("products/noResult");
        }
        else{
          res.render('products/filtrados',{newObject:filtrados});
        }
              //res.send(autores)
        }
         
        //res.render('products/filtrados', {newObject: filtrados});
    
}


module.exports = productController