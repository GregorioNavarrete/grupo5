

module.exports = (sequelize, DataTypes) => {
    let alias = 'Productos_Autores'
    let columns = {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        id_author: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }
    let config = {
        tableName: 'product_author',
        timestamps: false
    }



    let ProductoAutor = sequelize.define(alias, columns, config);

    //falta documentar la logica 
    
    ProductoAutor.associate = function(models){ 
        ProductoAutor.belongsTo(models.Author, {
            as: "author",
            foreignKey: "id_author"
            
        })

        ProductoAutor.belongsTo(models.Product, {
            as: "product",
            foreignKey: "id_product" })
    }

    return ProductoAutor;
}