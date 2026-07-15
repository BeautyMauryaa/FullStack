import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGOURL);
        console.log("mongodb connected to server.");

    }catch(err){
        console.log("mongodb connection failed", err.message());
        process.exist(1);

        
    }
};


export default connectDB;