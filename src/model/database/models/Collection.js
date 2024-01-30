module.exports = (sequelize, DataTypes) =>{
    let alias = 'Collections';
    let columns = {
        ID_COLLECTION : {
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
        tableName: 'collection',
        timestamps: false
    }


   let Collection = sequelize.define(alias, columns, config);

   return Collection; 

}