
const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');



const userService = {

    
    
    fileName : path.join(__dirname,'../data/users.json'), //tomamos el archivo json

    getData : function () {
        return JSON.parse(fs.readFileSync(this.fileName , 'utf-8')); //este metodo getData devuelve la informacion del archivo json

    },

    getOne: function(id){
        usuario = this.getData().find((elem)=>elem.id == id);
        return usuario;
    },

    generateId: function () { // este metodo incrementa el id al crear un usuario
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();// el metodo pop devuelve el ultimo usuario 

        if(lastUser) {//en este caso verificamos que el array no este vacio, si esta vacio devuelve el 1, si no esta vacio incremente el id
            return lastUser.id +1;
        }
        return 1
    },

    findAll: function () {
        return this.getData();//hace lo mismo que getData pero este hace mas sentido al nombre
    },

    
    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id ); //este metodo find toma el id del array y lo compara con el id del parametro findByPk, cuando lo encuentra corta la busqueda
        return userFound;
    },

    findByField: function (fIeld , text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[fIeld] === text ); //lo que hacemos aqui es comparar si field es igual al texto que le pasamos 
        return userFound;
    },

    create : function (req) {
        let allUsers = this.findAll();
        let newUser = {
            id : this.generateId(),
            categoria : 'usuario',
            ...req.body,
            password : bcryptjs.hashSync(req.body.password, 10),
            imagen : req.file.filename
        }
        console.log(newUser.imagen);

        allUsers.push(newUser)
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers , null , '' ));
        return newUser;
    },

    search: function(req){
      let allUsers = this.getData()
      let searchUsers = req.query.search.toLowerCase();
      let results = [];
      for ( let i=0; i < allUsers.length;i++){
         if(allUsers[i].nombre.toLowerCase().includes(searchUsers) || allUsers[i].apellido.toLowerCase().includes(searchUsers)){
          results.push(allUsers[i])
        }
      }
      return results
      
    },
  
    edit: function(req){

        let usuario = this.getOne(req.params.id);
        let userToEdit = req.body; 
       // let imagen = req.file;

        usuario.nombre = userToEdit.nombre;
        usuario.apellido = userToEdit.apellido;
        usuario.email = userToEdit.email;
        usuario.usuario = userToEdit.usuario;
        /*
            ashear la contraseña con sal=10
            usuario.password = userToEdit.password  pero asheado
        /

       /
       console.log("\n  antes : " + usuario.imagen);
        let borrar = path.join(__dirname, ../../public/img/users/${usuario.imagen});

        fs.unlink(borrar, (err) => {
          if (err) {
            console.error(err);
            return;
          }

          console.log("\n  medio : " + usuario.imagen);
        }); */


        console.log(usuario);
        let indece = this.getData().findIndex(elem => elem.id == req.params.id);
        this.getData()[indece]= usuario;

        fs.writeFileSync(this.fileName,JSON.stringify(this.getData()),'utf-8');

    },


    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id != id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers , null , '' ));
        console.log(finalUsers);
        return finalUsers;
    },

}

module.exports = userService;