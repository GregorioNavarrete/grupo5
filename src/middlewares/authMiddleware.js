function authMiddleware(req, res, next) {
	console.log("estoy en autenticator");
	if (!req.session.userLogged) {
		//si no esta en session un usuario o admin, te redirigira a login
		return res.redirect('/user/login');
	}
	
	next();
}

module.exports = authMiddleware;