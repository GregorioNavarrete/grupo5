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

      List: (req,res) => {
        const Users = JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8'));
        res.render('users/userList', {Users:Users})
    },
    search: (req,res) => {
      let searchUsers = req.query.search;
      let Results = [];
      for ( let i=0; i < Users.length;i++){
         if(this.Users[i].name.includes(searchUsers)){
          Results.push(this.Users[i])
         }
      }
      return Results;
    }
}
    
    

    


module.exports = userController