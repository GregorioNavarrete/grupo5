module.exports = (sequelize, DataTypes) =>{
    let alias = 'Languages';
    let columns = {
        ID_LANGUAGE : {
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
        tableName: 'language',
        timestamps: false
    }


   let Language = sequelize.define(alias, columns, config);

   return Language; 

}