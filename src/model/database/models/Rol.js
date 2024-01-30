module.exports = (sequelize, DataTypes) =>{
    let alias = 'Roles';
    let columns = {
        ID_ROL : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        NAME: {
            type: DataTypes.STRING,
            allowNull:false
        }
    }
    let config = {
        tableName: 'rol',
        timestamps: false
    }


   let Rol = sequelize.define(alias, columns, config);

   return Rol; 

}