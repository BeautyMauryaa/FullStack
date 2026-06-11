const {fetchproduct,createproduct} = require('../service/product.service.js');

const getproduct= async(req,res)=>{
    try{
     const product=await fetchproduct();
      res.json(product);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const addproduct= async(req,res)=>{
try{
    const product=await createproduct(req.body);
    res.status(201).json(product);

}catch(err){
    res.status(500).json({error:err.message});
}
};

module.exports ={
    getproduct,
    addproduct
}