module.exports = (sequelize, DataTypes) => {
    let alias = 'Genre';
    let columns = {
        id_genre : {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: 'genre',
        timestamps: false
    }


   let Genre = sequelize.define(alias, columns, config);
   Genre.associate = function(models){
   Genre.belongsToMany(models.Product,{
    as: 'products',
    through:'product_genre',
    foreignKey: 'id_genre',
    otherkey: 'id_product',
    timestamps: false
   })
   }

   return Genre; 

}