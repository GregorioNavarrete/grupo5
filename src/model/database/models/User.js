module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let columns = {
        id_user : {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        id_rol: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        id_fav: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password: { 
            type : DataTypes.STRING,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: 'user_person',
        timestamps: false
    }


   let User = sequelize.define(alias, columns, config);
   User.associate = function(models){
   User.hasMany(models.Comment,{
    as: 'Comments',
    foreignKey: 'id_user',
    onDelete:'CASCADE'
   }),

        User.belongsTo(models.Rol,{
            as: 'Rols',
            foreignKey: 'id_rol'
        })
           ,
           User.hasMany(models.user_product,{
               as: 'user_products',
               foreignKey: 'ID_USER'
              })  
        ,
        User.belongsToMany(models.Product,{
            as: 'Products',
            through:'user_product',
            foreignKey: 'ID_USER',
            otherkey: 'ID_PRODUCT',
            timestamps: 'false'
           })

   //falta conectarse con el modelo favorito 
   }

   return User; 

}