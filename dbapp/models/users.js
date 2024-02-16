module.exports=(seq1,DataTypes)=>{
    const user2=seq1.define("users",{
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
        timestamps:false
    });
    return user2;
};