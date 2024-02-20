const {Sequelize,DataTypes}=require('sequelize');

const sequelize=new Sequelize('nodeapp','root','',{
      host:'localhost',
      dialect:'mysql',
      pool:{max:5,min:0,idle:1000}
});

sequelize.authenticate()
.then(()=>{
    console.log("you are connected with database");
})
.catch(err=>{
    console.log('not connected' ,err);
})

// const db={};
// db.Sequelize=Sequelize;
// db.sequelize=sequelize;
// //db.users=require('./users.js')(sequelize,DataTypes);


// db.sequelize.sync()
// .then(()=>{
//     console.log("yes it is synced");
// })
//module.exports=db;
