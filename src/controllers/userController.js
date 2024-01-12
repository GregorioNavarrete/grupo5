const path = require('path');
const fs = require('fs');
const userService = require('../data/userService');

const userController = {

    

    login : (req, res) => {
        res.render('users/login');
      },

    registro: (req, res) => {
        res.render('users/register');
      },

    registrationProcess:(req,res)=>{
      userService.create(req)
      res.redirect('/');
    },

    edit: (req, res) => {
      // Do the magic
      res.render('users/userEdit', {userToEdit : userService.findByPk(req.params.id)});
      
    },

    update: (req, res) => {
      // Do the magic
      /*buscamos un prod por id y busco cambiarle los datos, por los que tengo en el req */
      //productService.save(req);
      userService.edit(req);
      res.redirect('/');
    }
      
}
    
    

    


module.exports = userController