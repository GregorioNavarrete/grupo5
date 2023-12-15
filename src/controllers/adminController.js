const path = require('path');
const product = require('../model/productos');
const producto = require('../model/productos');
const productService = require('../data/productService');

const adminController = {
    formCarga : (req, res) => {
        //para mostrar los elementos enlistados

        res.render('admin/FormularioDeCarga',{product : productService.getAll()});
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
        res.render('admin/FormularioDeCarga', {productToEdit : productService.getOne(req.params.id)});
        
      }
}


module.exports = adminController