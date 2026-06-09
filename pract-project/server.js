const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    return res.send("welcome to demo site");
})

app.get('/dashboard',(req,res)=>{
    return res.send(` welcome to the dashabord`);
})

app.listen(3000,()=>console.log("server started!"));