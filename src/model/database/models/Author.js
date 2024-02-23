module.exports = (sequelize, DataTypes) => {
    let alias = 'Author';
    let columns = {
        id_author : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
            
        },
        biography: {
            type: DataTypes.TEXT,
            allowNull:false
           
        },
        image: {
            type: DataTypes.STRING,
            allowNull:false
            
        }
    }
    let config = {
        tableName: 'author',
        timestamps: false
    }


   let Author = sequelize.define(alias, columns, config);

   Author.associate = function(models){
    
    Author.belongsToMany(models.Product,{
     as: 'Products',
     through:'product_author',
     foreignKey: 'id_author',
     otherKey: 'id_product',
     timestamps: false
    })
   }

   return Author; 

}