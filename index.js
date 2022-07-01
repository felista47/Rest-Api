const express = require('express');
// const cors =require('cors')
// require ('dotenv').config()
const router = require('./routes/UsersRoute.js')

const app = express()
const port =3000

app.use(express.json())
// app.use(cors())
app.use('/', router)

app.use((req,res,next)=>{
    const error = new Error("Page Not Found");
    error.status =404
    next(error)
})
app.use((err,req,res,next)=>{
    res.json({
        status:err.status,
        success:false,
        message:err.message
    })
})

app.listen(port,()=>console.log(`server running: ${port}`))


