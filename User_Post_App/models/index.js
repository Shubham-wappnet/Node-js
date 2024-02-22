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



// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
   const db = {};

// // let sequelize;
// // if (config.use_env_variable) {
// //   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// // } else {
// //   sequelize = new Sequelize(config.database, config.username, config.password, config);
// // }



// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user=require('./userModel.js')(sequelize,DataTypes);
db.post=require('./postModel.js')(sequelize,DataTypes);

 db.user.hasMany(db.post, { as: 'postDetails', foreignKey: 'userId' });
 db.post.belongsTo(db.user, { as: 'userDetails', foreignKey: 'userId' });

module.exports = db;
