const product=[
    { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
]

const fetchproduct =async()=>{
    return product;
}

const createproduct=async(data)=>{
    const newproduct={id:product.length+1,...data};
    product.push(newproduct);
    return newproduct;
}


module.exports={
    fetchproduct,
    createproduct
}