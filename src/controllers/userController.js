const path = require('path');
const fs = require('fs');
const userService = require('../data/userService');

const userController = {

    

    login : (req, res) => {
        res.render('users/login');
      },

    registro: (req, res) => {
        res.render('users/register');
      },

    registrationProcess:(req,res)=>{
      userService.create(req)
      res.redirect('/');
    }
      
}
    
    

    


module.exports = userController