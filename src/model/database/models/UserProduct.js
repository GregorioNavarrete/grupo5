

module.exports = (sequelize, DataTypes) => {
    let alias = 'user_product'
    let columns = {
        //hacerlo igual que product_genres
        ID : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true 
        },
        ID_USER: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ID_PRODUCT: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cant: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

    }
    let config = {
        tableName: 'user_product',
        timestamps: false
    }



    let user_product = sequelize.define(alias, columns, config);

    //falta documentar la logica 
    
    user_product.associate = function(models){

        // user_product.belongsTo(models.Genre, {
        //     as: "genre",
        //     foreignKey: "id_genre"
            
        // })

        user_product.belongsTo(models.Product, {
            as: "products",
            foreignKey: "ID_PRODUCT" }),

        user_product.belongsTo(models.User,{
        as: 'Users',
        foreignKey: 'ID_USER'
        })
    }

    return user_product;
}