module.exports = (sequelize, DataTypes) =>{
    let alias = 'Rol';
    let columns = {
        id_rol : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        }
    }
    let config = {
        tableName: 'rol',
        timestamps: false
    }


   let Rol = sequelize.define(alias, columns, config);

   Rol.associate = function(models){
    Rol.hasMany(models.User,{
     As : 'Users',
     foreignKey: 'id_rol'
    })
   }

   return Rol; 

}