module.exports = (sequelize, DataTypes) =>{
    let alias = 'Author';
    let columns = {
        id_author: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: DataTypes.STRING,
            
        },
        biography: {
            type: DataTypes.STRING,
           
        },
        image: {
            type: DataTypes.STRING,
            
        }
    }
    let config = {
        tableName: 'author',
        timestamps: false
    }


   let Author = sequelize.define(alias, columns, config);

   Author.associate = function(models){
    Author.belongsToMany(models.Product,{
     as: 'Productos',
     through:'product_author',
     foreignKey: 'id_author',
     otherkey: 'id_product',
     timertaps: 'false'
    })
   }

   return Author; 

}