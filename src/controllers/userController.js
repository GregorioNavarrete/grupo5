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

    registro: (req, res) => {
        res.render('users/register');
      },

    processRegister:(req,res)=>{

      let resultValidation = validationResult(req);
      console.log(resultValidation.mapped())
      if(resultValidation.errors.length > 0){
        return res.render('users/register',{
          errors : resultValidation.mapped(),
          oldData : req.body
        })
       } 

    let userInDB = userService.findByField('email', req.body.email);

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
		userService.create(req);
    res.redirect('/')
    },             

    update: (req, res) => {
      // Do the magic
      /*buscamos un prod por id y busco cambiarle los datos, por los que tengo en el req */
      //productService.save(req);
      userService.edit(req);
      res.redirect('user/profile');
    },

    edit: (req, res) => {
      let id= req.params.id;
      res.render('users/userEdit', {user : userService.getOne(id)});
      console.log(userService.getOne(id))
     },


    loginProcess: (req, res) => {

         /*
      supongoque ya tengo una clave sifrada con sal de 10 

      gmail es = gregonavarrete30@gmail.com
      123 = $2a$10$obMzpsGjB0ylI2WL726oReep1IuZ4iU4TZjp58rQPH2t6YQy3AyM.

      */
      //Cuando el usuario quiere ingresar a su cuenta
      //queremos verificar si tenemos "req.body" registrada

      let userToLogin = userService.findByField('email', req.body.email);//me da un usuario 
      
      //si encontro alguien por email
      if(userToLogin) {
      
        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

  
        //si la contraseña iniciada es igual a la contraseña en la BD
        if (isOkThePassword) {
          delete userToLogin.password;//para q no se conserve en la secion
  
          req.session.userLogged = userToLogin;//son todos los datos que se vana a guardar en la secion
  
          if(req.body.remember_user) {
           res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
           
          }
  
          return res.redirect('/user/profile');//*****************si todo sale bien te manda a la vista del perfil que un no tenemos 
        } 
  
        //si la contraseña iniciada es distinta a la contraseña en la BD
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
    },
    profile: (req, res) => {
      //vemos que mostramos una vista con los valores que hay en las "secion " (coki)
      console.log(req.session.userLogged);
      return res.render('users/userProfile', {
        user: req.session.userLogged
      });
    },
    logout: (req, res) => {
      res.clearCookie('userEmail');//para destruir la cookie
      req.session.destroy();//borra todo lo que este en secion
      return res.redirect('/');

    },


     destroyuser : (req,res) => {
      let id = req.params.id
      userService.delete(id);
      console.log(userService.delete(id));
      res.redirect('/');
    }
   
}
    
    

    


module.exports = userController