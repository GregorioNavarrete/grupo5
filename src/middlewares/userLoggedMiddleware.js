const User = require('../data/userService');
//Este es un MID de aplicacio que nos permite loguearnos automaticamente, si es que aun
// estan activas las cookies, al cerra el navergador


//falta explicar el codigo de la cooki
async function userLoggedMiddleware (req, res, next) {
  try {
    res.locals.isLogged = await false;
  
    const emailInCookie = await req.cookies.userEmail;
    const userFromCookie = await User.findByField('name_user','email', emailInCookie);
  
    //console.log(userFromCookie);
  
    if (userFromCookie) {
      req.session.userLogged = userFromCookie;
  
      res.locals.userLogged = userFromCookie;
      res.locals.isLogged = true;
    }
    if(req.session.userLogged) {
      res.locals.isLogged=true;
      res.locals.userLogged= req.session.userLogged;
    }
  
    next();
    
  } catch (error) {
    
  }
}

module.exports = userLoggedMiddleware;