module.exports=(sequelize,DataTypes)=>{
    const Post=sequelize.define("post",{
       id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
       },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:true
        },
        desg:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps:false,
        paranoid:true
    })
    return Post;
}