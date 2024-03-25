const userService = require('../data/userService');

function users(name, last_name, email,id_user){
  this.name = name
  this.last_name = last_name
  this.email = email
  this.detail  = "http://localhost:3000/api/users/"+id_user
}

function user(name, last_name, email,image){
    this.name = name
    this.last_name = last_name
    this.email = email
    this.image  = "/img/users/"+image
  }
  

const apiController = {

    list: async function (req, res) {
        try {
         
          let allUsers = await userService.getData();
          let newUsers = allUsers.map(usuario=> new users(usuario.name, usuario.last_name, usuario.email,usuario.id_user))
          res.status(200).json({
            count: allUsers.length,
            users: newUsers,
            
            
          });
          
        } catch (error) { 
          console.log(error.message);
          res.set('Content-Type', 'text/plain')
          res.send("Error inesperado").status(500)
        }
      },
      getOne: async function (req, res) {
        try {
          let oneUser = await userService.getOne(req.params.id);
          let User = new user(oneUser.name, oneUser.last_name, oneUser.email, oneUser.image);
          res.status(200).json({User});
        } catch (e) {
          res.send(e);
        }
      }
    }

    module.exports=apiController
