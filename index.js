const express = require('express');

const app = express();
const  UserRoute = require('./routes/UsersRoute.js')
const port =3000;

app.use(express.json());
app.use('/', UserRoute);

app.use((req,res,next,err)=>{
    const error = new Error("Page Not Found");
    error.status =404
    next(error)
})

app.listen(port, ()=>console.log(`server running: ${port}`))


