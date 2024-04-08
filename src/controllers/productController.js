const path = require('path');
const productService = require('../data/productService');
const fs = require('fs');
const { log } = require('console');

const productController = {

  index: async (req, res) => {
    try {
      let libros = await productService.getAll();
      let librosBest = await productService.fiandBest();
      let generos = await productService.fiandGenres();
      res.render('products/index', {product: libros, best:librosBest, genres: generos});    
    } catch (error) {
      console.log(error);
    }
  },

  cart: async (req, res) => {
    try {
      // le tengo que poner funcionalidad xq ya esta la tabla apara esto 
      let htmlPath = path.resolve(__dirname, '../views/products/productCart.ejs');
      res.render(htmlPath);
    } catch (e) {
      console.log(e);
    }
  },

  ShowCarrito: async function (req, res) {
    try {
     
      let obj = await productService.getCarrito(req.params.id);
      let tres = await productService.GetLimit();
      
      res.render('products/productCart', { producto: obj.prod, precios: obj.prec, total: obj.Tot, totalEnvio: obj.TotEnvio, art: tres });
    } catch (e) {
      console.log(e);
    }
  },

  AddCarrito: async function (req, res) {
    try {
      let busqueda = await productService.BuscarProductoCarrito(req);
      if(busqueda == true ){
        res.redirect(`/product/cart/home/${req.params.id}`);
      }else{
        await productService.AddProductoCarrito(req);
        res.redirect(`/product/cart/home/${req.params.id}`);
      }
    }catch(e){
      console.log(e);
    }
  },
  UpdateCantidad : async (req, res) =>{
    try{
      await productService.editCantidad(req);
      res.redirect(`/product/cart/home/${req.params.id}`);
    }catch(e){
      res.status(500).send({e:'ocurrio un error, vuelva a intentar mas tarde'})
    }
  },

  DeleteCar: async(req, res) =>{
    try{
        let id_carrito = req.params.id;
        let id_user = req.params.ID;
        await productService.DeleteCarrito(id_carrito);
        res.redirect(`/product/cart/home/${id_user}`);
    }catch(e){
      console.log(e);
    }
  },

  Cantidad: async (req, res) => {
    try {
      let obj1 = await productService.editCantidad(req);
      console.log("previo al redirect")

      //le mando el req xq el id = id_user

      let aux = req.params.id;

      res.redirect(`/product/cart/home/${req.params.id}`);


    } catch (e) {
      res.status(500).send({ e: 'ocurrio un error, vuelva a intentar mas tarde' })
    }
  },

  DeletCarrito: async (req, res) => {
    try {
      let obj1 = await productService.DeleteCarrito(req.params.id);

      res.redirect(`/product/cart/home/${req.params.user}`);
    } catch (e) {
      res.status(500).render({ e: 'algo salio mal al eliminar los productos del carrito' });
    }
  },

  getOne: async (req, res) => {
    try {
      let id = req.params.id;
      let aux = await productService.getOne(id);
      let aux1 = await productService.getAll();
      let comentarios = await productService.allcoments(id);
      res.render('products/productDetail', { producto: aux, product: aux1, comentarios: comentarios });
      //res.send(comentarios)
    } catch (error) {
      res.render('admin/error');
    }
  },

  all: async function (req, res) {
    try {
      let libros = await productService.getAll();
      res.render('products/allProduct', { products: libros });
    } catch (error) {
      res.render('admin/error');
    }
  },

  catg: (req, res) => {
    //se usa ? 
    let htmlPath = path.resolve(__dirname, '../views/products/categoria.ejs');
    res.render(htmlPath);
  },

  indexCatg: async function (req, res) {
    try {
      let newCatg = await productService.catg(req);
      let products = await productService.getAll();



      if (newCatg[0] === undefined) {
        // si no hay librose esa categoria, redirecciono 
        res.redirect('/');
      }
      res.render('products/categoria', { newCatg: newCatg, products: products })

    } catch (error) {
      res.render('admin/error');
    }
  },

  filtro: async (req, res) => {

    try {
      let filtro = await productService.filter(req)
      if (productService.filter(req).length == 0) {
        res.render("products/noResult");
      }
      else {
        res.render('products/filtrados', { newObject: filtro });
      }
    } catch (error) {
      res.render('admin/error');
    }

  },

  productSearch: async (req, res) => {
    try {
      let busqueda = await productService.search(req);
      let productos = await productService.getAll();
      res.render("products/searchProducts", { productResult: busqueda, products: productos })
    } catch (error) {
      res.render('admin/error');
    }

  },

  author: async (req, res) => {
    try {
      let autor = await productService.authors(req.params.id);

      res.render('products/authors', { autor: autor })
    } catch (error) {
      res.render('admin/error');
    }
  },

  sendComment: async (req, res) => {
    try {
      let id = req.params.id
      let newComment = await productService.createComment(req);
      res.redirect('../../../product/libro/' + req.params.id)

    } catch (error) {

    }
  }


}


module.exports = productController