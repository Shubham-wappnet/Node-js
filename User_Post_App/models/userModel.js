module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("user",{
        id:{
            type:DataTypes.number,
            allowNull:false
        },
        email:{
            type:DataTypes.string,
            allowNull:false
        },
        name:{
            type:DataTypes.string,
            allowNull:false
        },
        phone:{
            type:DataTypes.number,
            allowNull:false
        },
        status:{
            type: DataTypes.ENUM('active', 'inactive', 'pending'), 
            allowNull: false,
            defaultValue: 'pending'
        }
    },{
        timestamps:false
    })
    return User;
}