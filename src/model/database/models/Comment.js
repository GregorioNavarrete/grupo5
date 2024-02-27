module.exports = (sequelize, DataTypes) => {
    let alias = 'Comment';
    let columns = {
        id_comment : {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        ID_PRODUCT: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ID_USER: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        publication_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        star: {
            type: DataTypes.TINYINT,
            allowNull: false
        }
    }
    let config = {
        tableName: 'comment',
        timestamps: false
    }


   let Comment = sequelize.define(alias, columns, config);
   Comment.associate = function(models){
   Comment.belongsTo(models.Product,{
    as: 'Products',
    foreignKey: 'id_comment'
   }),

   Comment.belongsTo(models.User,{
    as: 'Users',
    foreignKey: 'id_user'
   })
   }

   return Comment; 

}