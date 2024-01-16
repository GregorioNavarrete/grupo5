const path = require('path');
const product = require('../model/productos');
const producto = require('../model/productos');
const productService = require('../data/productService');
const userService = require('../data/userService');

const adminController = {
  formCarga : (req, res) => {
    //para mostrar los elementos enlistados

    res.render('admin/FormularioDeCarga',{product : productService.getAll()});
    //let htmlPath = path.resolve(__dirname,'../views/products/FormularioDeCarga.ejs') ;
    //res.render(htmlPath);
  },
  formCargaLibro : (req, res) => {
    //para mostrar los elementos enlistados

    res.render('admin/FormularioCargaLibros');
    //let htmlPath = path.resolve(__dirname,'../views/products/FormularioDeCarga.ejs') ;
    //res.render(htmlPath);
  },

  search: (req, res)=>{  
    res.render('admin/FormularioDeCarga',{product : productService.seach(req)})
    
  },
  store: (req, res)=>{
    // al metodo "save" le poso por parametro el OBJ "body" que obtengo del POST
    productService.save(req);
    //res.send(req.body); //Para ver si lo modifico, que si
    res.redirect('/admin/FormCarga');
  },
  destroy : (req, res) => {
    // Do the magic
    productService.delete(req.params.id);
    res.send("El producto fue eliminado con exito");
  },
  edit: (req, res) => {
    // Do the magic
    res.render('admin/FormularioEditLibro', {productToEdit : productService.getOne(req.params.id)});
    
  },
  update: (req, res) => {
    // Do the magic
    /*buscamos un prod por id y busco cambiarle los datos, por los que tengo en el req */
    //productService.save(req);
    productService.edit(req);
    res.redirect('/admin/FormCarga');
  },

  list: (req,res)=>{
      res.render('users/userList', {Users : userService.findAll()})
  },


  destroy : (req,res) => {
    userService.delete(req.params.id);
    res.redirect('user/admin/list');
  }

}



module.exports = adminController