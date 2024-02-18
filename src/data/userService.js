const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const db = require('../model/database/models');
const { log } = require('console');


const userService = {

    getData : async function () {
        try {
            return await db.User.findAll();
        } catch (error) {
            
        }

    },

     getOne: async function(id){
        try {
             usuario = await db.User.findByPk(id);
             return await usuario;
            
        } catch (error) {
            
        }
        
    }, 

    findByPk: async function (id){
        try {
            let allUsers = await this.getData(); // Aquí se llama a la función
            let userFound = allUsers.find(oneUser => oneUser.id === id );
            return userFound;
        } catch (error) {
            
        }
    },

    findByField: async function (field, text){
        try {
            let allUsers = await this.getData() 
            let userFound = await allUsers.find(oneUser => oneUser[field] === text );
            return await userFound;
        } catch (error) {
            
        }
    },

    create : async function (req) {
        try {
            let password = bcryptjs.hashSync(req.body.password, 10)
            let imageFilename = req.file ? req.file.filename :  'descarga.jpg';
            let newUser = await db.User.create({
                id_fav : 1,
                id_rol:2,
                name : req.body.nombre,
                last_name : req.body.apellido,
                name_user: req.body.usuario,
                email: req.body.email,
                password: password,
                image: imageFilename 
            })
            return newUser
        } catch (error) {
    
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
  
    edit: async function(req){
        try {
            let imageFilename = req.file ? req.file.filename :  req.session.userLogged.image;
    
            await db.User.update({
                name : req.body.nombre,
                last_name : req.body.apellido,
                name_user: req.body.usuario,
                email: req.body.email,
                image: imageFilename 
            },{where:{id_user:req.params.id}})
    
            let userToEdit = await db.User.findOne({where: {id_user: req.params.id}});
            req.session.userLogged = userToEdit; // Actualiza el usuario en la sesión
            return userToEdit;
        } catch (error) {
             // Esto permitirá que el error se maneje en tu controlador
        }
    },
    
     delete: async function (id) {
        try {
             return await db.User.destroy({
                where:{
                    id_user: id
                }
            })

            
        } catch (error) {
            console.log(error)
        }
    }, 

}

module.exports = userService;