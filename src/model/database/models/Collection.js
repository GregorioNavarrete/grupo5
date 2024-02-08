const Product = require("./Product");

module.exports = (sequelize, DataTypes) =>{
    let alias = 'Collection';
    let columns = {
        id_collection : {
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
        tableName: 'collection',
        timestamps: false
    }


   let Collection = sequelize.define(alias, columns, config);
   Collection.associate = function(models){
   Collection.hasMany(models.Product,{
    as: 'Products',
    foreignKey: 'id_collection'
   })

   }
   return Collection; 

}