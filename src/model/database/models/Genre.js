module.exports = (sequelize, DataTypes) =>{
    let alias = 'Genres';
    let columns = {
        ID_GENRE : {
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
        tableName: 'genre',
        timestamps: false
    }


   let Genre = sequelize.define(alias, columns, config);

   return Genre; 

}