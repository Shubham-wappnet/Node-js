const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
      host: process.env.HOST,
      dialect: 'mysql',
  
  })

sequelize.authenticate()
.then(()=>{
  console.log("connected with db")
})
.catch(err=>{
  console.log("check connection")
})

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user=require('./userModel.js')(sequelize,DataTypes);
db.post=require('./postModel.js')(sequelize,DataTypes);

 db.user.hasMany(db.post, { as: 'postDetails', foreignKey: 'userId' });
 db.post.belongsTo(db.user, { as: 'userDetails', foreignKey: 'userId' });

module.exports = db;
