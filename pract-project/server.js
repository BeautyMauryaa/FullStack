const express=require("express");
const data=require("./MOCK_DATA.json")
const app=express();


app.get("/api/product",(req,res)=>{
    return res.json(data);
})


app.get("/api/product/:id",(req,res)=>{
    const id=Number(req.params.id);
    const product=data.find((product)=>product.id===id);
    if(!product){
        return res.end("product not found")
    }
    return res.json(product)
})

//to add product
app.post("/api/addproduct",(req,res)=>{
    const body=req.body;
    data.push(body);
    return res.status(201).json(
        {
            message:"product created successfully",
            product: body
        }
    );
});


const port =3000;
app.listen(port, ()=>{
    console.log(`server running on ${port}.`);
})

