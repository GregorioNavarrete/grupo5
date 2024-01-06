const path = require('path');
const fs = require('fs');

const userService = {
    
    fileName : path.join(__dirname,'../data/users.json'), //tomamos el archivo json

    getData : function () {
        return JSON.parse(fs.readFileSync(this.fileName , 'utf-8')); //este metodo getData devuelve la informacion del archivo json

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
            imagen : req.file.filename,
            categoria : 'usuario',
            ...req.body
        }

        allUsers.push(newUser)
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers , null , '' ));
        return newUser;
    },



    search: function(req){
        let allUsers = this.findAll();
      let searchUsers = req.query.search.toLowerCase();
      let results = [];
      for ( let i=0; i < allUsers.length;i++){
         if(Users[i].nombre.toLowerCase().includes(searchUsers) || Users[i].apellido.toLowerCase().includes(searchUsers)){
          results.push(Users[i])
        }
      }
      return results
      
    },


    

}

module.exports = userService;