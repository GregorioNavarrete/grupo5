async function atenticaadmin(req, res, next) {
    //si usuario o no-usuario, no podran entra a paginas de admin 
    try {
		if (req.session.userLogged != undefined){
			if (req.session.userLogged.id_rol === 2) {
				
				return res.redirect('/user/profile');
			}
		}
		next();
		
	} catch (error) {
		
	}

	
}

module.exports = atenticaadmin; 