const express = require('express')
const cors = require('cors')
const app = express()
const PORT =  3000

var corOptions={origin:"https://localhost:3000"}

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/productRouter.js')
app.use('/api/products', router)



app.get('/',(req,res)=>{
    res.json({message:"Hello,how are you"})
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})