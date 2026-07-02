// //instead of use try and catch block, we can use express-async-handler package to handle errors in async functions

// Client
//    │
//    ▼
// Controller
//    │
//    ▼
// Database
//    │
//    ▼
// Error
//    │
//    ▼
// Global Error Middleware
//    │
//    ▼
// {
//    success:false,
//    message:"User not found"
// }

//types of error:
//1. operation error: ex password is wrong, user not found, email already exists, JWt expired, etc
//- these happen because of user input or normal application flow

//2. programming error: bugs in the code, ex: undefined variable, wrong function call etc.

//3. system error: problem with the environment, ex: database connection lost, server down, etc



//professional workflow: 
// client -> route -> controller -> service -> database -> error -> global error middleware -> logs -> response to client



//http status codes for different situations
// | Situation               | Status |
// | ----------------------- | -----: |
// | Success                 |    200 |
// | Resource Created        |    201 |
// | Validation Error        |    400 |
// | JWT Missing/Invalid     |    401 |
// | Permission Denied       |    403 |
// | Resource Not Found      |    404 |
// | Duplicate Email         |    409 |
// | Unexpected Server Error |    500 |



//next () is a function that is used to pass control to the next middleware function in the stack.
//without next(), the request will be left hanging and the client will not receive a response.

//real ex: authentication middlware,

function auth(req,res,next){
    const token=req.headers.authorization;
    if(!token){
        return res.status(401).json({success:false, message :"unauthorized"});
    }
    next(); //pass control to the next middleware function
}



// Client

// ↓

// Auth Middleware

// ↓

// Token Found?

// ├── No
// │      ↓
// │   401 Response
// │
// └── Yes
//        ↓
//      next()
//        ↓
//    Profile Route


//next () and next(err) 
// next(err) - pass control to the nexy error handling middleware function in the stack
//ex:
app.get("/profile",auth,(req,res,next)=>{
    next(new Error("Something went wrong")); //pass control to the next error handling middleware
});

app.use((err,req,res,next)=>{
    res.status(500).json({
        message:err.message
    });
});

//flow:
// Request

// ↓

// Route

// ↓

// next(error)

// ↓

// Global Error Middleware

// ↓

// Response


//global error handling : one place that handle all errors
// project struct: 
// src/

// middlewares/
//     error.middleware.js

// controllers/

// routes/

// models/

// app.js

//error.middlware.js: 
const errorhandler=(err,req,res,next)=>{
    res.status(500).json({
        success: false,
        message: err.message
    })
}

// app.js:
const express=require("express");
const app=express();
const errorhandler=require("./middleware/error.middleware");

//routes
app.get("/profile",auth);