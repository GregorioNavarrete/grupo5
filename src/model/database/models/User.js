module.exports = (sequelize, DataTypes) =>{
    let alias = 'User';
    let columns = {
        id_user : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
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
   User.associate = function(models){
   User.hasMany(models.Comment,{
    as: 'Comments',
    foreignKey: 'id_user'
   }),

   User.belongsTo(models.Rol,{
    as: 'Rols',
    foreignKey: 'id_rol'
   })
   }

   return User; 

}