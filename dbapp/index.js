const express=require('express');
const app=express();
const port=3000;
require('./models/db1.js');
require('./models/users.js');
var userCtrl=require('./controller/userController.js');

app.get('/',(req,res)=>{
    res.send("Welcome");
})
app.get('/add',userCtrl.addUser)

try{
   app.listen(port,()=>{
    console.log("app is running on " +port);
   })
}
catch(err){
     console.log("can't run app" ,err);
}


