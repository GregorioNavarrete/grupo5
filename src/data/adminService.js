const db = require('../model/database/models')
const fs = require('fs');
const path = require('path');


const adminService = {

    getOne: async function(id){
        try {
             usuario = await db.User.findByPk(id,{
                include : [{association : 'Rols'}]
            });
             return  usuario;
            
        } catch (error) {
            
        }
        
    }, 

    edit: async function(req){
        try {
            let user = await this.getOne(req.params.id)
            let categoria = req.body.categoria
            return await db.User.update({
                id_rol : categoria,
                name : req.body.nombre,
                last_name : req.body.apellido,
                name_user: req.body.usuario,
                email: req.body.email,
                image: user.image
            },{where:{id_user:req.params.id}})
    
            
        } catch (error) {
             console.log(error);
        }
    },

    delete: async function (id) {
        try {
            let user = await this.getOne(id);
            let carrito = await db.user_product.destroy({ where: { ID_USER: id } });
            let comment = await db.Comment.destroy({ where: { id_user: id } });

            if (user.image != "default.png") {
                let borrar = path.join(__dirname, `../../public/img/users/${user.image}`);
                fs.unlink(borrar, (err) => {
                if (err) {
                console.error(err);
                }
                });
            }
            return await db.User.destroy({
                where:{
                    id_user: id
                }
            })
        } catch (error) {
            console.log(error)
        }
    }, 

}

module.exports = adminService