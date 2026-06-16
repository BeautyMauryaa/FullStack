//instead of handling error in every controller , one place handle all errors.
//without this every controller has try{ }catch(err){ } -> repeated code everywhere

const { response } = require("express");


//step1: create error middleware (middleware/errormiddleware.js)
const errorMiddleware=(
    err,
    req,
    res,
    next
)=>{
    res.status(err.statuscode|| 500).json({
        success:false,
        message:err.message || "invalid url"
    });
};

module.exports=errorMiddleware;
// 4 parameters: err,res,req,next 

//step2: register it in app.js or server.js
app.use(errorMiddleware); //always at the bottom

//step 3: 
//instead of throw error :
if(!user){
    return res.status(404).json({
        message:"invalid user"
    })
}

//use:
if(!user){
    throw new Error("user not found")
}


//complete flow:
// request -> controller -> error occur -> throw new CustomError... -> Error middleware -> response

