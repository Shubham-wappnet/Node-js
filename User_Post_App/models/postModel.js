module.exports=(sequelize,DataTypes)=>{
    const Post=sequelize.define("post",{
       id:{
        type:DataTypes.number,
        allowNull:false
       },
        title:{
            type:DataTypes.string,
            allowNull:false
        },
        description:{
            type:DataTypes.string,
            allowNull:true
        },
        desg:{
            type:DataTypes.number,
            allowNull:false
        }
    },{
        timestamps:false
    })
    return Post;
}