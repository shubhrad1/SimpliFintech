const dotenv=require('dotenv');
const express=require('express');
const pool=require('./database');

dotenv.config();


const app=express();
const port=process.env.PORT;


app.listen(port,()=>
console.log("[SERVER] Server listening at port:",port)
)

app.get('/login',(req,res)=>
    res.render('login')
)