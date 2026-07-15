// import express from "express";
// const routes = express.Router();


import { Router } from "express";
const routes=Router();


//register
app.post("/sighup",userController.sighup, (req,res) =>{
    res.send("sighup page fetched successfully");
});


app.get("/login", userController.login, (req,res)=>{
    res.send("login page fetch successfully");
})

export default router;