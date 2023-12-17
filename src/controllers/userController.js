const path = require('path');
const fs = require('fs');
const { log, Console } = require('console');
const UsersFilePath= path.join(__dirname, '../data/users.json');

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
          nombre: req.body.usuario,
          apellido: req.body.apellido,
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
    }
}
    
    

    


module.exports = userController