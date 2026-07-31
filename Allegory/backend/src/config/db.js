import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGOURL);
         console.log("MongoDB connected successfully");

    }catch(err){
        console.log("mongodb connection failed", err.message);
        process.exit();

        
    }
};
export default connectDB;