module.exports = (sequelize, DataTypes) =>{
    let alias = 'Editorials';
    let columns = {
        ID_EDITORIAL : {
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
        tableName: 'editorial',
        timestamps: false
    }


   let Editorial = sequelize.define(alias, columns, config);

   return Editorial; 

}