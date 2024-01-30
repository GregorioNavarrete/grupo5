module.exports = (sequelize, DataTypes) =>{
    let alias = 'Products';
    let columns = {
        ID_PRODUCT : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        TITLE: {
            type: DataTypes.STRING,
            allowNull:false
        },
        SUBTITLE: {
            type: DataTypes.STRING,
            allowNull: false
        },
        PRICE: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        IMAGE:{
            type: DataTypes.STRING,
            allowNull: false
        },
        DESCRIPTION: { 
            type : DataTypes.INTEGER 
        },
        
        PAGES:{
            type: DataTypes.INTEGER
        },
        EDITION:{
            type: DataTypes.INTEGER
        },
        STOCK:{
            type: DataTypes.INTEGER
        },
        DISCOUNT: {
            type: DataTypes.INTEGER

        },
        CREATED: {
            type: DataTypes.DATE,

        },
        UPDATED:{
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: 'product',
        timestamps: false
    }


   let Product = sequelize.define(alias, columns, config);

   return Product; 

}