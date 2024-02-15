module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let columns = {
        id_product : {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description: { 
            type : DataTypes.TEXT 
        },
        
        pages:{
            type: DataTypes.STRING,
        },
        edition:{
            type: DataTypes.STRING,
        },
        stock:{
            type: DataTypes.SMALLINT
        },
        discount: {
            type: DataTypes.BIGINT
        },
        created: {
            type: DataTypes.DATE,
        },
        updated:{
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: 'product',
        timestamps: false
    }


   let Product = sequelize.define(alias, columns, config);

   Product.associate = function(models){
    Product.belongsToMany(models.Author,{
     as: 'authors',
     through:'product_author',
     foreignKey: 'id_product',
     otherKey: 'id_author',
     timestamps: false
    }),

    Product.belongsToMany(models.Support,{
        as: 'Formats',
        through:'product_support',
        foreignKey: 'id_product',
        otherKey: 'id_support',
        timestamps: false
       }),

       Product.belongsToMany(models.Genre,{
        as: 'Genres',
        through:'product_genre',
        foreignKey: 'id_product',
        otherKey: 'id_genre',
        timestamps: false
       }),

       Product.belongsTo(models.Collection,{
        as: 'Collections',
        foreignKey: 'id_collection'
       }),

       Product.belongsTo(models.Language,{
        as: 'Languages',
        foreignKey: 'id_language'
       }),

       Product.belongsTo(models.Editorial,{
        as: 'Editorials',
        foreignKey: 'id_editorial'
       }),

       Product.hasMany(models.Comment,{
        as: 'Comments',
        foreignKey: 'id_comment'
       })
   }

   return Product; 

}