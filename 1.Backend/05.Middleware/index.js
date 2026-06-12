require("dotenv").config();
const express = require("express");
const app=express();


//built in middleware:
app.use(express.json());


//custom middleware: 1 logger
const logger=(req,res,next)=>{
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
}

// middleware 2 : auth check:

const authcheck=(req,res,next)=>{
   const token =req.headers.authorization;
   if(!token){
    return res.status(401).json({error: "no token provided"});
   }
   next();
}


//apply logger: 
app.use(logger);

//apply middleware:

//mounting the route file:

const studentadmin=require("./student-admin-routes.js");
app.use("/api",studentadmin);


app.get("/public",(req,res)=>{
    res.json({message: "anyone can see this"});
})

//apply auth middleware:
app.get("/proctectedlog",authcheck,(req,res)=>{
    res.json({message:"need token"});
});

app.listen(3000,()=>console.log("server running on port 3000"));