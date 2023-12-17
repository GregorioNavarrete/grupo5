const path = require('path');
const fs = require('fs');
const { log } = require('console');
const UsersFilePath= path.join(__dirname, '../data/users.json');

const userController = {

    Users:JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8')),

    login : (req, res) => {
        res.render('users/login');
      },

    registro: (req, res) => {
        res.render('users/register');
      },

      create:(req,res)=>{
      let archivoUsuario = fs.readFileSync(UsersFilePath, 'utf-8');
    function ultimoId = archivoUsuario.reduce((maxId, usuario) => {
        return usuario.id > maxId ? usuario.id : maxId;
      }, archivoUsuario[0].id);
    
    
      
      let nuevoUsuario={
        id: ultimoId+1,
        nombre: req.body.usuario,
        apellido:req.body.apellido,
        email: req.body.email,
        contraseña: req.body.password,
      }

      let usuarios;
      if(archivoUsuario == ""){
         usuarios = [];
      }
      else{
         usuarios = JSON.parse(archivoUsuario);
      }

      usuarios.push(nuevoUsuario);
      usuarioJSON=JSON.stringify(usuarios);
      fs.writeFileSync(UsersFilePath, usuarioJSON);

      res.redirect("/");

    }, 



      List: (req,res) => {
        let Users = JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8'));
        res.render('users/userList', {Users:Users})
    },
    search: (req,res) => {
      const Users = JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8'));
      let searchUsers = req.query.search;
      let Results = [];
      for ( let i=1; i < Users.length;i++){
         if(this.Users[i].name.includes(searchUsers)){
          Results.push(this.Users[i])
         }
      }
      return Results;
    },
    edit:(req,res)=>{
      let Users = JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8'));
      let idUser= req.params.idUser;
      let UserToEdit = Users[idUser];
      res.render('userEdit',{UserToEdit:UserToEdit})
    }
}
    
    

    


module.exports = userController