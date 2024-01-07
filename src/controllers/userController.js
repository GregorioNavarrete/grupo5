const path = require('path');
const fs = require('fs');
const { log, Console } = require('console');
const UsersFilePath= path.join(__dirname, '../data/users.json');
const bcryptjs = require('bcryptjs');



const User = require('../model/User');


const userController = {

    Users:JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8')),

    login : (req, res) => {
        res.render('users/login');
      },

    registro: (req, res) => {
        res.render('users/register');
      },

      create: (req, res) => {
        let archivoUsuario = fs.readFileSync(UsersFilePath, 'utf-8');
      
        // Verificar si el archivo está vacío
        if (archivoUsuario == "") {
          archivoUsuario = [];
        } else {
          // Convertir la cadena de texto en un array
          archivoUsuario = JSON.parse(archivoUsuario);
        }
      
        let ultimoId = archivoUsuario.reduce((maxId, usuario) => {
          return usuario.id > maxId ? usuario.id : maxId;
        }, archivoUsuario[0].id);
      
        let nuevoUsuario = {
          id: ultimoId + 1,
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          usuario:req.body.usuario,
          email: req.body.email,
          contraseña: req.body.password,
          categoria : "usuario",
          imagen : "usuario.jpg"

        }
      
        archivoUsuario.push(nuevoUsuario);
        usuarioJSON = JSON.stringify(archivoUsuario);
        fs.writeFileSync(UsersFilePath, usuarioJSON);
      
        res.redirect("/");
      },



      List: (req,res) => {
        let Users = JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8'));
        res.render('users/userList', {Users:Users})
    },



    search: (req,res) => {
      const Users = JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8'));
      let searchUsers = req.query.search.toLowerCase();
      let Results = [];
      for ( let i=0; i < Users.length;i++){
         if(Users[i].nombre.toLowerCase().includes(searchUsers) || Users[i].apellido.toLowerCase().includes(searchUsers)){
          Results.push(Users[i])
        }
      }
      //res.send(Results)
      res.render('users/userResults',{userResults : Results});
    },


    edit:(req,res)=>{
      let Users = JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8'));
      let idUser= req.params.idUser;
      let UserToEdit = Users[idUser];
      res.render('userEdit',{UserToEdit:UserToEdit})
    },
    loginProcess: (req, res) => {

         /*
      supongoque ya tengo una clave sifrada con sal de 10 

      gmail es = gregonavarrete30@gmail.com
      123 = $2a$10$obMzpsGjB0ylI2WL726oReep1IuZ4iU4TZjp58rQPH2t6YQy3AyM.

      */
      //Cuando el usuario quiere ingresar a su cuenta
      //queremos verificar si tenemos "req.body" registrada

      let userToLogin = User.findByField('email', req.body.email);//me da un usuario 
      
      //si encontro alguien por email
      if(userToLogin) {
      
        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

  
        //si la contraseña iniciada es igual a la contraseña en la BD
        if (isOkThePassword) {
          delete userToLogin.password;//para q no se conserve en la secion
  
          req.session.userLogged = userToLogin;//son todos los datos que se vana a guardar en la secion
  
          //if(req.body.remember_user) {
          //  res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
          //}
  
          return res.redirect('/user/profile');//*****************si todo sale bien te manda a la vista del perfil que un no tenemos 
        } 
  
        //si la contraseña iniciada es distinta a la contraseña en la BD
        return res.render('userLoginForm', {
          errors: {
            email: {
              msg: 'Las contraseña es inválida'
            }
          }
        });
      }
  
  
      //si no encontro alguien por email
       return res.render('userLoginForm', {
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
    }
}
    
    

    


module.exports = userController