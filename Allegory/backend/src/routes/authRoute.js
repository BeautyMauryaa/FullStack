// import express from "express";
// const routes = express.Router();


import { Router } from "express";
import {signup,login} from "../controller/authController.js"
const routes=Router();


//register
router.post("/signup",authController.signup, (req,res) =>{
    res.send("signup page fetched successfully");
});


router.get("/login",authController.login, (req,res)=>{
    res.send("login page fetch successfully");
})

export default router;