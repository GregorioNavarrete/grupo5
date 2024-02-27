module.exports = (sequelize, DataTypes) => {
    let alias = 'Support';
    let columns = {
        id_support : {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: 'SUPPORT',
        timestamps: false
    }


   let Support = sequelize.define(alias, columns, config);
   Support.associate = function(models){
//    Support.belongsToMany(models.Product,{
//     as: 'products',
//     through:'product_support',
//     foreignKey: 'id_support',
//     otherkey: 'id_product',
//     timestamps: 'false'
//    })
        Support.hasMany(models.Product,{
            as: 'Products',
            foreignKey: 'ID_SUPPORT'
        })

    }

   return Support; 

}