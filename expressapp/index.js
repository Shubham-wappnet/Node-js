const express=require('express');
const path=require('path');
const app=express();
const port=4000;


const router = express.Router();
 
router.get('/', function (req, res, next) {
    
    res.status(200).send("Router is working").end();
})
app.use(router);
///////

app.use(express.urlencoded({ extended: false }));
app.post('/', function (req, res) {
    console.log(req.body);
    res.end();
});

/////
app.use(express.static(path.join(__dirname, 'public')))
 
app.get('/', function (req, res, next) {
    res.render('home.ejs');
})
 
 
app.listen(port, function (err) {
    if (err) 
    console.log(err);
    console.log("Server listening on PORT", port);
});