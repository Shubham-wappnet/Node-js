const express = require('express');

const app = express();
const port = 3000;


// app.listen(port,(err)=>{
//     if(!err){
//         console.log("My server is running on " +port)
//     }
//     else{
//         console.log("create properly",err )
//     }
// });


///////

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html'); 
    res.status(200).send("<h2>Now your app will run on server</h2>");
});


///////

//use middleware - contain (req,res,next)
const getData=function(req,res,next){
    req.getData="Hi,buddy"
    req.getTime=Date.now();
    next();
}
app.use(getData);
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html'); 
    let msg=""
    msg+=`<h2>${req.getData} now your app will run on server<br>and time starts ${req.getTime}</h2>`;
    res.status(200).send(msg);
});


///////

app.use(express.json());
// app.use(express.raw());

let name = ''; 
app.post('/', (req, res) => {
    const { name: newName } = req.body;
    const{id:newId}=req.body;
    const{city:newCity}=req.body;
    const{hobby:newHobby}=req.body;
    if (!newName||!newId||!newCity||!newHobby) {
        return res.status(400).send("Name,id,city,hobby are required");
    }
    name = newName;   
    id=newId;
    city=newCity;
    hobby=newHobby;

    res.status(201).send(`Welcome ${name} 
                         your id is : ${id}
                         you live in : ${city}
                        and you like : ${hobby}`).end();
});


////////

app.put('/', (req, res) => {
    const { name: newName } = req.body;
    const{id:newId}=req.body;
    const{city:newCity}=req.body;
    const{hobby:newHobby}=req.body;
    if (newName&&newId&&newCity&&newHobby) {
        return res.status(400).send("Name,id,city,hobby are is required");
    }
    name = newName;
    id=newId;
    city=newCity;
    hobby=newHobby;

    res.status(200).send(`data updated to Welcome ${name} 
                                           your id is : ${id}
                                           you live in : ${city}
                                           and you like : ${hobby}`).end();
});

////////
app.patch('/', (req, res) => {
    const { name: newName } = req.body;
    const{id:newId}=req.body;
    const{city:newCity}=req.body;
    const{hobby:newHobby}=req.body;
    
    if (!newName||!newId||!newCity||!newHobby) {
        return res.status(400).send("Name,id,city,hobby are is required");
    }

    name = newName; 
    id=newId;
    city=newCity;
    hobby=newHobby;

    res.status(200).send(`data updated to Welcome ${name} 
                                           your id is : ${id}
                                           you live in : ${city}
                                           and you like : ${hobby}`).end();
});

try{
    app.listen(port,()=>{
        console.log("app is running on port " +port);
    })
}
catch(err){
     console.log("can't access", err);
}










