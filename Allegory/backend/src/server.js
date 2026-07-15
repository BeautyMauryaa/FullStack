// server.js is responsible for: Loading environment variables Connecting to the database Starting the server
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js" //mongo db connection 

dotenv.config()//read env file, make variable available through process.env.

connectDB();

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});
