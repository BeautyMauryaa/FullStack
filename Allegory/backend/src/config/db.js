import mongoose from "mongoose";

// const connectDB=async()=>{
//     try{
//         await mongoose.connect(process.env.MONGOURL);
//         console.log("mongodb connected to server.");

//     }catch(err){
//         console.log("mongodb connection failed", err.message);
//         process.exit(1);

        
//     }
// };
const connectDB = async () => {
    try {

        console.log("MONGOURL:", process.env.MONGOURL);

        await mongoose.connect(process.env.MONGOURL);

        console.log("MongoDB connected successfully");

    } catch (err) {
        console.log("MongoDB connection failed:", err.message);
        process.exit(1);
    }
};

export default connectDB;