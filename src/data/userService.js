const fs = require('fs');
const path = require('path');
//const upload = require('../middlewares/multer');





/*****Es para pasar el JASON a un arreglo de objetos y poder manipularlo ******/
const usersFilePath = path.join(__dirname, '../data/users.json');



const userService = {

    //es un atributo que tiene todos los productos en un Arrglo de objetos
    users:JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')),

    getAll: function(){
        return this.products;    
    },


    getOne: function(id){
        usuario = this.users.find((elem)=>elem.id == id);
            return usuario;
    },

    
    edit: function(req){
        let Usuario = this.getOne(req.params.id);
        let nuevoUsuario = req.body; 
        let imagen = req.file;  

        usuario.nombre = nuevoUsuario.nombre;
        usuario.apellido = nuevoUsuario.apellido;
        usuario.email = nuevoUsuario.email;
        usuario.usuario = nuevoUsuario.usuario;

        console.log("\n  antes : " + producto.portada);
        let borrar = path.join(__dirname, `../../public/img/users/${usuario.imagen}`);
        fs.unlink(borrar, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("\n  medio : " + usuario.imagen);
        });
        

        let indece = this.users.findIndex(elem => elem.id == req.params.id);
        this.users[indece]= usuario;
    
        fs.writeFileSync(usersFilePath,JSON.stringify(this.users),'utf-8');
    },
    seach : function(req){
        //el "req.query" es el objeto que manda el GET 
        let buscar = req.query.Buscar;

        let buscados =[];

        for(let i=0;i<this.users.length;i++){
            if (this.users[i].titulo.includes(buscar)){
                //SI LA PALABRA ESTA CONTENIDA, GUARDARA EL ELEMENTO 
                buscados.push(this.users[i]);
            }
        }
        return buscados;
    },

}

module.exports = userService;