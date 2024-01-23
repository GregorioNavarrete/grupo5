const User = require('../data/userService');
//Este es un MID de aplicacio que nos permite loguearnos automaticamente, si es que aun
// estan activas las cookies, al cerra el navergador


//falta explicar el codigo de la cooki
function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  const emailInCookie = req.cookies.userEmail;
  const userFromCookie = User.findByField('email', emailInCookie);

  //console.log(userFromCookie);

  if (userFromCookie) {
    req.session.userLogged= userFromCookie;

    res.locals.userLogged = userFromCookie;
    res.locals.isLogged = true;
  }
  if(req.session.userLogged) {
    res.locals.isLogged=true;
    res.locals.userLogged= req.session.userLogged;
  }

  next();
}

module.exports = userLoggedMiddleware;