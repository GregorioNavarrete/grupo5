const path = require('path');
const productService = require('../data/productService');
const userService = require('../data/userService');
const db = require('../model/database/models');
const adminService = require('../data/adminService')

const adminController = {
  // formCarga : (req, res) => {
  //   //para mostrar los elementos enlistados

  //   res.render('admin/FormularioDeCarga',{product : productService.getAll()});
  //   //let htmlPath = path.resolve(__dirname,'../views/products/FormularioDeCarga.ejs') ;
  //   //res.render(htmlPath);
  // }
  formCarga : async (req, res) =>{
    try{
      let product = await productService.getAll();

      res.render('admin/FormularioDeCarga',{product : product});
    }catch(e){
      console.log(e);
    }
  }
  ,
  formCargaLibro : (req, res) => {
    //para mostrar los elementos enlistados

    res.render('admin/FormularioCargaLibros');
    //let htmlPath = path.resolve(__dirname,'../views/products/FormularioDeCarga.ejs') ;
    //res.render(htmlPath);
  },

  search: (req, res)=>{  
    res.render('admin/FormularioDeCarga',{product : productService.search(req)})
    
  },
  store: (req, res)=>{
    // al metodo "save" le poso por parametro el OBJ "body" que obtengo del POST
    productService.save(req);
    //res.send(req.body); //Para ver si lo modifico, que si
    res.redirect('/admin/FormCarga');
  },
  destroy : async (req, res) => {
    try{
            // Do the magic
      let aux = await productService.delete(req.params.id);
      res.redirect("/admin/formCarga");
    }catch(e){
      console.log(e);
    }

  },
  edit: async (req, res) => {
    try{
        // Do the magic
        let productToEdit = await productService.getOne(req.params.id)
        res.render('admin/FormularioEditLibro', {productToEdit : productToEdit });
    }catch(e){
      console.log(e);
    }
  },
  update: async (req, res) => {
    try {
      // Do the magic
      /*buscamos un prod por id y busco cambiarle los datos, por los que tengo en el req */
      //productService.save(req);
      productService.edit(req);
      res.redirect('/admin/FormCarga');
    }catch(e){
      console.log(e);
    }
  },

  list:async (req,res)=>{
    try {
      let users = await userService.getData()
      res.render('admin/userList', {Users : users})
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  },


  destroyuser : async (req,res) => {
    try {
      
      let id = req.params.id
     await adminService.delete(id);
     res.redirect('/admin/list');
    } catch (error) {
      
    }
  },

  userSearch :async (req,res)=>{
    try {
      const Users = await userService.search(req)
      res.render('users/userResults', {Users} )
      
    } catch (error) {
      
    }
  },

  updateUser: async (req, res) => {
    try {
        let userEdit = await adminService.edit(req);
        await res.redirect('../../../admin/list');
    } catch (error) {
        console.error(error); // Esto imprimirá el error en tu consola
        res.status(500).send({error: 'Hubo un error al actualizar el usuario'}); // Esto enviará una respuesta con un mensaje de error
    }
},

  editUser: async (req, res) => {
    try {
      let id =  req.params.id;
      let user = await userService.getOne(id)
      res.render('admin/userEdit', {user : user });
    } catch (error) {
      console.log(error)
    }
   },

}



module.exports = adminController