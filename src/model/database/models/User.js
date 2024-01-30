module.exports = (sequelize, DataTypes) =>{
    let alias = 'Users';
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
            allowNull: false,
            
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        name_user: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: { 
            type : DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
    let config = {
        tableName: 'user_person',
        timestamps: false
    }


   let User = sequelize.define(alias, columns, config);

   return User; 

}