const express =require("express");
const app=express();
app.use(express.json());


const productRoute=require('./src/route/product.route.js');
app.use("/product", productRoute);
const port=3000;

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})