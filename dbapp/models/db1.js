const {Sequelize,DataTypes}=require('sequelize');

const seq1=new Sequelize('nodeapp','root','',{
      host:'localhost',
      dialect:'mysql',
      pool:{max:5,min:0,idle:1000}
});

seq1.authenticate()
.then(()=>{
    console.log("you are connected with database");
})
.catch(err=>{
    console.log('not connected' ,err);
})
const db={};
db.Sequelize=Sequelize;
db.seq1=seq1;
db.users=require('./users.js')(seq1,DataTypes);


db.seq1.sync()
.then(()=>{
    console.log("yes it is synced");
})
module.exports=db;
