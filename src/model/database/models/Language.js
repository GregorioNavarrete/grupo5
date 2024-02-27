module.exports = (sequelize, DataTypes) => {
    let alias = 'Language';
    let columns = {
        id_language : {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
    let config = {
        tableName: 'language',
        timestamps: false
    }


   let Language = sequelize.define(alias, columns, config);

   Language.associate = function(models){
   Language.hasMany(models.Product,{
    as: 'Products',
    foreignKey: 'id_language'
   })

   }

   return Language; 

}