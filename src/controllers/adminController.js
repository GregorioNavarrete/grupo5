const path = require('path');
const productService = require('../data/productService');
const userService = require('../data/userService');
const db = require('../model/database/models');
const adminService = require('../data/adminService')

const adminController = {
  
  formCarga : async (req, res) =>{
    try{
      let product = await productService.getAll();

      res.render('admin/FormularioDeCarga',{product : product});
    }catch(e){
      res.render('admin/error')
    }
  }
  ,
  formCargaLibro : (req, res) => {
    //para mostrar los elementos enlistados

    res.render('admin/FormularioCargaLibros');
    
  },

  search: async (req, res)=>{
    try{
      let Encontrados = await productService.search(req);
      res.render('admin/FormularioDeCarga',{product : Encontrados})
    }catch(e){
      res.render('admin/error')
    }  
  },
  store: (req, res)=>{
    // al metodo "save" le poso por parametro el OBJ "body" que obtengo del POST
    productService.save(req);
    //res.send(req.body); //Para ver si lo modifico, que si
    res.redirect('/admin/FormCarga');
  },
  destroy : async (req, res) => {
    try{
            
      let aux = await productService.delete(req.params.id);
      res.redirect("/admin/formCarga");
    }catch(e){
      res.tatus(500).send({e:'algo salio mal al eliminar, intentelo mas tarde'})
    }

  },
  edit: async (req, res) => {
    try{
        
        let productToEdit = await productService.getOne(req.params.id);
        console.log(productToEdit);
        res.render('admin/FormularioEditLibro', {productToEdit : productToEdit });
    }catch(e){
      res.render('admin/error')
    }
  },
  update: async (req, res) => {
    try {
      
      /*buscamos un prod por id y busco cambiarle los datos, por los que tengo en el req */
      
      productService.edit(req);
      res.redirect('/admin/FormCarga');
    }catch(e){
      res.status(500).send({e:'algo salio mal al actualizar, intentelo mas tarde'})
    }
  },

  list:async (req,res)=>{
    try {
      let users = await userService.getData()
      res.render('admin/userList', {Users : users})
      
    } catch (error) {
      res.render('admin/error')
    }
  },


  destroyuser : async (req,res) => {
    try {
      
      let id = req.params.id
     await adminService.delete(id);
     res.redirect('/admin/list');
    } catch (error) {
      res.status(500).send({error:'ocurrio un error al elminar usuario'})
    }
  },

  userSearch :async (req,res)=>{
    try {
      const Users = await userService.search(req)
      res.render('users/userResults', {Users} )
      
    } catch (error) {
      res.render('admin/error')
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
      res.render('admin/error')
    }
   },

}



module.exports = adminController