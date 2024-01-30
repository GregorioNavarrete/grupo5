module.exports = (sequelize, DataTypes) =>{
    let alias = 'Comments';
    let columns = {
        ID_COMMENT : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        DESCRIPTION: {
            type: DataTypes.STRING,
            allowNull:false
        },
        PUBLICATION_DATE: {
            type: DataTypes.DATE,
            allowNull: false
        },
        STAR: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: 'comment',
        timestamps: false
    }


   let Comment = sequelize.define(alias, columns, config);

   return Comment; 

}