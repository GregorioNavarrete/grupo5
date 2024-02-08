module.exports = (sequelize, DataTypes) =>{
    let alias = 'Product';
    let columns = {
        id_product : {
            type: DataTypes.INTEGER,
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
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description: { 
            type : DataTypes.INTEGER 
        },
        
        pages:{
            type: DataTypes.INTEGER
        },
        edition:{
            type: DataTypes.INTEGER
        },
        stock:{
            type: DataTypes.INTEGER
        },
        discount: {
            type: DataTypes.INTEGER

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
     otherkey: 'id_author',
     timertaps: 'false'
    }),

    Product.belongsToMany(models.Support,{
        as: 'Formats',
        through:'product_support',
        foreignKey: 'id_product',
        otherkey: 'id_support',
        timertaps: 'false'
       }),

       Product.belongsToMany(models.Genre,{
        as: 'Genres',
        through:'product_genre',
        foreignKey: 'id_product',
        otherkey: 'id_genre',
        timertaps: 'false'
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