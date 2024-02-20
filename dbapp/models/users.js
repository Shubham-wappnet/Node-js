module.exports=(sequelize,DataTypes)=>{
    const user2=sequelize.define("Users",{
        name: {
            type: DataTypes.STRING,
            allowNull: false ,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    },{
        //tableName:"persons",  create new table 'persons'
        timestamps:false     // if we are not using this it shows createdAt & updateAt in table
    });
    return user2;
};