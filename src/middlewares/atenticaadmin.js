function atenticaadmin(req, res, next) {
    //si usuario o no-usuario, no podran entra a paginas de admin 
	console.log("estoy en autenticator");

	if (req.session.userLogged != undefined){
		if (req.session.userLogged.categoria === "usuario") {
            console.log("no sos admin");
			return res.redirect('/user/profile');
		}
	}

	
	next();
}

module.exports = atenticaadmin; 