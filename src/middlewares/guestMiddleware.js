function guestMiddleware(req, res, next) {
	//me permite ir directo al perfil y no ver el register y login de nuevo
	if (req.session.userLogged != undefined){
		
			return res.redirect('/user/profile');
	
	}
	next();
}

module.exports = guestMiddleware;