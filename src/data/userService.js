const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const db = require('../model/database/models');
const { log } = require('console');


const userService = {

   
    
    //fileName : path.join(__dirname,'../data/users.json'), //tomamos el archivo json

    getData : async function () {
        //return JSON.parse(fs.readFileSync(this.fileName , 'utf-8')); //este metodo getData devuelve la informacion del archivo json
        try {
            return await db.User.findAll()
        } catch (error) {
            
        }

    },

     getOne: async function(id){
        usuario = await  this.getData().find((elem)=>elem.id == id);
        return usuario;
    }, 

    /* generateId: function () { // este metodo incrementa el id al crear un usuario
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();// el metodo pop devuelve el ultimo usuario 

        if(lastUser) {//en este caso verificamos que el array no este vacio, si esta vacio devuelve el 1, si no esta vacio incremente el id
            return lastUser.id +1;
        }
        return 1
    }, */

    /* findAll: function () {
        return this.getData();//hace lo mismo que getData pero este hace mas sentido al nombre
    }, */

    
    findByPk: async function (id){
        try {
            let allUsers = await this.getData() // Aquí se llama a la función
            let userFound = allUsers.find(oneUser => oneUser.id === id );
            return userFound;
        } catch (error) {
            
        }
    },

    findByField: async function (field, text){
        try {
            let allUsers = await this.getData() // Aquí se llama a la función
            
            let userFound = await allUsers.find(oneUser => oneUser[field] === text );
            
            return await userFound;
        } catch (error) {
            
        }
    },

    create : async function (req) {
        try {
            let password = bcryptjs.hashSync(req.body.password, 10)
            
            let newUser = await db.User.create({
                id_fav : 1,
                id_rol:2,
                name : req.body.nombre,
                last_name : req.body.apellido,
                name_user: req.body.usuario,
                email: req.body.email,
                password: password,
                image: req.file.filename 
            })
            //console.log(newUser);
            return newUser
        } catch (error) {
            //console.error(error);
        }
    },

    /* search: function(req){
      let allUsers = this.getData()
      let searchUsers = req.query.search.toLowerCase();
      let results = [];
      for ( let i=0; i < allUsers.length;i++){
         if(allUsers[i].nombre.toLowerCase().includes(searchUsers) || allUsers[i].apellido.toLowerCase().includes(searchUsers)){
          results.push(allUsers[i])
        }
      }
      return results
      
    }, */
  
   /* edit: function(req){

        let usuario = this.getOne(req.params.id);
        let userToEdit = req.body; 

        //borra la imagen anterior
        let borrar = path.join(__dirname, `../../public/img/users/${usuario.imagen}`);
        fs.unlink(borrar, (err) => {
        if (err) {
        console.error(err);
        return;
        }
        });

        usuario.nombre = userToEdit.nombre;
        usuario.apellido = userToEdit.apellido;
        usuario.email = userToEdit.email;
        usuario.usuario = userToEdit.usuario;
        usuario.imagen = req.file.filename;
        usuario.categoria = userToEdit.categoria;

        // Actualiza el usuario en el json
        let data = this.getData();
        let index = data.findIndex(user => user.id == req.params.id);
        data[index] = usuario;
        fs.writeFileSync(this.fileName, JSON.stringify(data), 'utf-8');
    }, */

    
     delete: async function (id) {
        try {
            let allUsers = await this.findAll();
            let finalUsers = await  allUsers.filter(oneUser => oneUser.id != id);
            fs.writeFileSync(this.fileName, JSON.stringify(finalUsers , null , '' ));
            console.log(finalUsers);
            return finalUsers;
            
        } catch (error) {
            
        }
    }, 

}

module.exports = userService;