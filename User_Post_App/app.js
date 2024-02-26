const express = require('express'); 
const cors=require('cors');
const app = express();
const authenticateJWT=require('./middleware/authMiddleware')
const validateRegistration=require('./middleware/validation.js')
const port = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const router1=require('./routes/userRouter.js')
app.use('/api/users',router1)

const router2=require('./routes/postRouter.js')
app.use('/api/posts',router2)

app.get('/protected',authenticateJWT,(req,res)=>{
  res.json({msg:'protected route',email:req.email})
});

app.get('/validate',validateRegistration,(req,res)=>{
    res.json({msg:"user validate successfully"})
})

// app.post('/upload',upload.array('files',10),(req,res)=>{
//   res.send("files uploaded ")
// })

// allowed from 3000
const corOption={origin:"https://localhost:3000",
                 methods:'GET,POST,PUT,PATCH,DELETE'
                }
app.use(cors(corOption))
app.get('/',cors(corOption),(req, res) => {
  res.send('Hello, World!-this is a cors enabled origin');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
