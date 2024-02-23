

module.exports = (sequelize, DataTypes) => {
    let alias = 'Productos_Generos'
    let columns = {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        ID_GENRE: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ID_PRODUCT: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }
    let config = {
        tableName: 'product_genre',
        timestamps: false
    }



    let ProductGenre = sequelize.define(alias, columns, config);

    //falta documentar la logica 
    
    ProductGenre.associate = function(models){

        ProductGenre.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: "id_genre"
            
        })

        ProductGenre.belongsTo(models.Product, {
            as: "product",
            foreignKey: "id_product" })
    }

    return ProductGenre
}