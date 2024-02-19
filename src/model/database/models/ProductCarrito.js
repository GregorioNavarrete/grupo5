

module.exports = (sequelize, DataTypes) => {
    let alias = 'product_carrito'
    let columns = {
        ID : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        ID_PRODUCT: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }
    let config = {
        tableName: 'product_carrito',
        timestamps: false
    }



    let product_carrito = sequelize.define(alias, columns, config);

    //falta documentar la logica 
    
    product_carrito.associate = function(models){

        // product_carrito.belongsTo(models.Genre, {
        //     as: "genre",
        //     foreignKey: "id_genre"
            
        // })

        // product_carrito.belongsTo(models.Product, {
        //     as: "product",
        //     foreignKey: "id_product" })
    }

    return product_carrito;
}