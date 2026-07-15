// app.js is responsible for configuring the Express application. route middleware plugins etc.

import express from "express";
import cors from "cors"; //allow request from diff origin
const app=express();

//middleware 
app.use(cors()); //every incoming request firstly go through from the cors middleware
app.use(express.json());

//route:
//1.test route:
app.get("/",(req,res)=>{
    res.status(200).json({
        status:true,
        message:"server running for allegory."
    })
})

export default app;