// // import express from "express";
// // const routes = express.Router();


// import { Router } from "express";
// import {signup,login} from "../controller/authController.js"
// import { verifyToken } from "../middlewares/authmiddleware.js";
// import { roleAuthorized } from "../middlewares/rolemiddleware.js";

// const router=Router();


// //register
// router.post("/signup",signup, (req,res) =>{
//     res.send("signup page fetched successfully");
// });


// router.post("/login",login, (req,res)=>{
//     res.send("login page fetch successfully");
// })

// router.get("/profile", verifyToken, (req,res)=>{
//     res.json({
//         status:true,
//         message:"profile fetched successfully",
//        user:req.user
//     })
// } );

//  router.get("/user-dashboard", verifyToken,roleAuthorized("user"), (req,res)=>{
//     res.json({
//         status:true,
//         message:"welcome user"
//     })
//     router.get("admin-dashboard",verifyToken,roleAuthorized("admin"), (req,res)=>{
//         res.json({
//             status:true,
//             message:"welcome admin"
//         })
//     })
//  } );

// export default router;
import { Router } from "express";
import { signup, login } from "../controller/authController.js";
import { verifyToken } from "../middlewares/authmiddleware.js";
import { roleAuthorized } from "../middlewares/rolemiddleware.js";

const router = Router();

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Profile
router.get("/profile", verifyToken, (req, res) => {
    res.json({
        status: true,
        message: "Profile fetched successfully",
        user: req.user
    });
});

// User Dashboard
router.get(
    "/user-dashboard",
    verifyToken,
    roleAuthorized("user"),
    (req, res) => {
        res.json({
            status: true,
            message: "Welcome User"
        });
    }
);

// Admin Dashboard
router.get(
    "/admin-dashboard",
    verifyToken,
    roleAuthorized("admin"),
    (req, res) => {
        res.json({
            status: true,
            message: "Welcome Admin"
        });
    }
);

export default router;