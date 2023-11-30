const path = require('path');

const userController = {

    login : (req, res) => {
        res.render('users/login');
      },

    registro: (req, res) => {
        res.render('users/register');
      }
}

module.exports = userController