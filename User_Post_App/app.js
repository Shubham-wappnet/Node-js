const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); 
const cors=require('cors');
const app = express();

const port = process.env.PORT || 3000;

const corOption={origin:"https://localhost:3000"}
app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const router1=require('./routes/userRouter.js')
app.use('/api/users',router1)

const router2=require('./routes/postRouter.js')
app.use('/api/posts',router2)


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
