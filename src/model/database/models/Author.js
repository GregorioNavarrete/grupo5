module.exports = (sequelize, DataTypes) =>{
    let alias = 'Author';
    let columns = {
        ID_USER : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        NAME: {
            type: DataTypes.STRING,
            
        },
        BIOGRAPHY: {
            type: DataTypes.STRING,
           
        },
        IMAGE: {
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