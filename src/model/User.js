/*
Para para modularizar las funcionalidades

Seria equivalente al "productService.js" que esta en "data", se usa para hacer mas legible el "userController"
*/

const fs = require('fs');

const User = {
    //la direccion de la BD
	fileName: 'src/data/users.json',

	getData: function () {
		//para tranforma el JSON a un ARRAY con el metodo ".parse"
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},
    findAll: function () {
		//para ontener todos los usuarios
		return this.getData();
	},
    findByField: function (field, text) {
		//vamos a buscar un usuariio segun un campo
		//si es un campo repetido, nos dara el primero como "country"
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},

}
module.exports = User;
/*
Para verificar si funcionan los metodos 


console.log(User.findByField('email', "romanamado1@gmail.com"));

*/
