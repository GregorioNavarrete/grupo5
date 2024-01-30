module.exports = (sequelize, DataTypes) =>{
    let alias = 'Authors';
    let columns = {
        ID_USER : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        NAME: {
            type: DataTypes.STRING,
            
        },
        BIOGRAPHY: {
            type: DataTypes.STRING,
           
        },
        IMAGE: {
            type: DataTypes.STRING,
            
        }
    }
    let config = {
        tableName: 'author',
        timestamps: false
    }


   let Author = sequelize.define(alias, columns, config);

   return Author; 

}