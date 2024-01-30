module.exports = (sequelize, DataTypes) =>{
    let alias = 'Supports';
    let columns = {
        ID_SUPPORT : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        NAME: {
            type: DataTypes.STRING,
            allowNull:false
        }
    }
    let config = {
        tableName: 'support',
        timestamps: false
    }


   let Support = sequelize.define(alias, columns, config);

   return Support; 

}