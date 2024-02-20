const express=require('express');
const app=express();
const port=3000;

app.use(express.json());
require('./models/database.js');
app.get('/',(req,res)=>{
    res.send("Welcome");
});

try{
   app.listen(port,()=>{
    console.log("app is running on " +port);
   })
}
catch(err){
     console.log("can't run app" ,err);
}


