async function atenticaadmin(req, res, next) {
    //si usuario o no-usuario, no podran entra a paginas de admin 
    try {
		
	} catch (error) {
		
		if (req.session.userLogged != undefined){
			if (req.session.userLogged.categoria === "usuario") {
				return res.redirect('/user/profile');
			}
		}
		next();
	}

	
}

module.exports = atenticaadmin; 