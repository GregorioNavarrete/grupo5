const path = require('path');
const productService = require('../data/productService');
const fs = require('fs');

const productController = {

  index: async  (req, res) => {
    try {
      let libros = await productService.getAll();
      let librosBest = await productService.fiandBest()
      res.render('products/index', {product: libros, best:librosBest});
      // res.send( libros);

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
      cartID: async function (req, res)  {
        try{
          // le tengo que poner funcionalidad xq ya esta la tabla apara esto 
          let obj = await productService.getCarrito(req.params.id);
          let tres = await productService.GetLimit();
          console.log(tres)

          res.render('products/productCart',{producto : obj.prod , precios:obj.prec , total:obj.Tot ,totalEnvio:obj.TotEnvio, art:tres});
          // let htmlPath = path.resolve(__dirname,'../views/products/productCart.ejs') ;
          // res.render(htmlPath);
        }catch(e){
          console.log(e);
        }
        },
        AddCarrito: async function (req, res)  {
          try{
            // le tengo que poner funcionalidad xq ya esta la tabla apara esto 
            // let obj = await productService.getCarrito(req.params.id);

            let busqueda = await productService.BuscarProductoCarrito(req.params.id_producto);
            //bucar si el producto ya esta en el carrito 
            console.log("la busqueda : " + busqueda);
            if(busqueda == true ){
              //si esta, redirecciono al metodo "cartID"
              res.redirect(`/product/cart/home/${req.params.id}`);
            }else{
              // si no esta , lo agrego a la BDs y redirecciono a "cartID"
              let agregar = await productService.AddProductoCarrito(req);
              console.log("el agregar " + agregar);
              res.redirect(`/product/cart/home/${req.params.id}`);
            }
            
           
  
            // res.render('products/productCart',{producto : obj.prod , precios:obj.prec , total:obj.Tot ,totalEnvio:obj.TotEnvio});
            // let htmlPath = path.resolve(__dirname,'../views/products/productCart.ejs') ;
            // res.render(htmlPath);
          }catch(e){
            console.log(e);
          }
          },
        Cantidad : async (req, res) =>{
          try{
            let obj1 = await productService.editCantidad(req);
            console.log("previo al redirect")
            //res.redirect('product/cart/');
            //le mando el req xq el id = id_user
            // this.cartID(req);
            let aux = req.params.id;
            
            res.redirect(`/product/cart/home/${req.params.id}`);
            

          }catch(e){
            console.log(e);
          }
        },
        DeletCarrito: async (req, res) =>{
          try{
            let obj1 = await productService.DeleteCarrito(req.params.id);

            res.redirect(`/product/cart/home/${req.params.user}`);
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

          // console.log("new cartg ");
          // console.log(newCatg);
          // console.log("productos");
         // console.log(products);

          if(newCatg[0]=== undefined){
            // si no hay librose esa categoria, redirecciono 
            res.redirect('/');
          }
          res.render('products/categoria',{newCatg:newCatg, products : products})

        } catch (error) {
          console.log(error);
        }
      },

      filtro : async (req,res) => {

        try {
          let filtro = await productService.filter(req)
          if(productService.filter(req).length==0){
            res.render("products/noResult");
          }
          else{
            res.render('products/filtrados',{newObject: filtro });
          }
        } catch (error) {
          
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
          let autor = await productService.authors(req.params.id);
          //console.log(autor);
          //console.log(autor.Products);
          //console.log(autor.Products[0].product_author);
          res.render('products/authors', {autor : autor})
        } catch (error) {    
        }
      }


    }


module.exports = productController