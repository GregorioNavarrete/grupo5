module.exports = (sequelize, DataTypes) => {
    let alias = 'Editorial';
    let columns = {
        id_editorial : {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: 'editorial',
        timestamps: false
    }


   let Editorial = sequelize.define(alias, columns, config);

    Editorial.associate = function(models){
        Editorial.hasMany(models.Product,{
        as: 'Products',
        foreignKey: 'id_editorial'
        })
    }

   return Editorial; 

}