require('dotenv').config();
const express = require('express'); 
const cors=require('cors');
const app = express();
const mongoose=require('mongoose')
const session=require('express-session')
const uuid=require('uuid')

const validateRegistration=require('./middleware/validation.js')
const sessionAuthentication = require('./middleware/session.js');
const fileUpload=require('./middleware/multer.js');

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const corOption={origin:"https://localhost:3000",
                 methods:'GET,POST,PUT,PATCH,DELETE'
                }
app.use(cors(corOption))

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log("connected with db "))
.catch((err)=>console.log(err));

app.use(session(
  {
      createdid: (req) => {
          return uuid(); 
      },
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
          maxAge: 900000
      }
  }
));

const router1=require('./routes/userRouter.js')
app.use('/api/users',router1)

const router2=require('./routes/postRouter.js')
app.use('/api/posts',router2)



app.get('/validate',validateRegistration,(req,res)=>{
  res.json({msg:"user validate successfully"})
})

app.get('/fileupload',fileUpload,(req,res)=>{
  res.json({msg:'file uploaded'})
})

app.get('/protectedRoute', sessionAuthentication, (req, res) => {
    res.json({msg:'this route is protected'});
});


app.get('/',cors(corOption),(req, res) => {
  res.send('Hello, -this is a cors enabled origin');
});

app.listen(port, function(){
  console.log(`Server is running on port ${port}`);
});