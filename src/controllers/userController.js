const path = require('path');
const fs = require('fs');
const { log, Console } = require('console');
const userService = require('../data/userService');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator')


const userController = {
  
    login : (req, res) => {
        res.render('users/login');
      },

    registro:  (req, res) => {
        res.render('users/register');
      },

      processRegister: async (req,res)=>{
        try {
          let resultValidation = await validationResult(req);
          console.log(resultValidation.mapped())
          if(resultValidation.errors.length > 0){
            return res.render('users/register',{
              errors : resultValidation.mapped(),
              oldData : req.body
            })
           } 
     
         let userInDB = await userService.findByField('email', req.body.email);
     
        if (userInDB) {
          return res.render('users/register', {
            errors: {
              email: {
                msg: 'Este email ya está registrado'
              }
            },
            oldData: req.body
          });
        } 
        let user = await userService.create(req);
        
        // Iniciar la sesión del usuario después de registrarse
        req.session.userLogged = user;
        res.redirect('../../../');
        } catch (error) {
     
        }
     },
    
     profile: (req, res) => {
      let user = req.session.userLogged;
      return res.render('users/userProfile', {user: user});
    },

    update: async (req, res) => {
      try {
          let userEdit = await userService.edit(req);
          await res.redirect('../../../user/profile');
          console.log(userEdit) 
      } catch (error) {
          console.error(error); // Esto imprimirá el error en tu consola
          res.status(500).send({error: 'Hubo un error al actualizar el usuario'}); // Esto enviará una respuesta con un mensaje de error
      }
  },

    edit: async (req, res) => {
      try {
        let id =  req.params.id;
        let user = await userService.getOne(id)
        req.session.userLogged = user
        res.render('users/userEdit', {user : user });
      } catch (error) {
        console.log(error)
      }
     },

    loginProcess: async (req, res) => {
      try {
     let userToLogin = await userService.findByField('email', req.body.email);//me da un usuario 
     
     //si encontro alguien por email
     if(userToLogin) {
     
       let isOkThePassword = await bcryptjs.compareSync(req.body.password, userToLogin.password);

 
       //si la contraseña iniciada es igual a la contraseña en la BD
       if (isOkThePassword) {
         delete userToLogin.password;//para q no se conserve en la secion
 
         req.session.userLogged = userToLogin;//son todos los datos que se vana a guardar en la secion
 
         //si el checkbox esta activado para "recordar usuario"
         if(req.body.remember_user) {
           //en la cooki crea el campo "userEmail" y guarada los datos ahi
          res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
          
         }
         return res.redirect('/user/profile');
       } 
 
       return res.render('users/login', {
         errors: {
           email: {
             msg: 'La contraseña es inválida, debe tener 3 caracteres minimo'
           }
         }
       });
     }
 
 
     //si no encontro alguien por email
      return res.render('users/login', {
       //lo cargo al "errors" para 
       errors: {
         email: {
           msg: 'No se encuentra este email en nuestra base de datos'
         }
       }
     });
      } catch (error) {
        
      }

    },
    
    logout: async (req, res) => {
      try {
        res.clearCookie('userEmail');//para destruir la cookie
        req.session.destroy();//borra todo lo que este en secion
        return res.redirect('/');
      } catch (error) {
        
      }
    },
    
    destroyuser : async (req,res) => {
      try {
        let id = await req.params.id
       await userService.delete(id)
        console.log(userService.delete(id));
        await res.redirect('/');
      } catch (error) {
        
      }
    },
   
}
    
    

    


module.exports = userController