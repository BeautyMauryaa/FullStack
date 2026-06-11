### MVC - model view controller
- design pattern that separte the application into three interconnected model:
- M(Model) : database/data
- V(view)  : respond send back 
- C(controller) : receive request -> calls service -> send response

# there is two more extra layer:
1. service : actual business logic (called by controller)
2. routes : maps url for controller(url endpoint)


# workflow:
- request -> route -> controller -> service -> controller -> response


# each job:
1. route -> only job take the request and pass to the correct controller
2. controller -> receive request as per the request calls that service, send response
3. service ->  does the actual logic, return result to the controller 
4. controller -> recive that request send to the client


# real ex:

for ex the req is : GET API/PRODUCT
1. route - > get this request (get product ...send to the getproduct() in product.controller)

2. controller -> get product request - ask the service for product (calls fetchproduct())

3. service -> return product 

4. controller -> receive the product from service sending back to the client res.json(product)



//without mvc: one file for everything(messy hard to manage and understand)

// with mvc : each file have their own task (each part does one job easy to fix and manage and understand)



//for ex: 

1. product.controller.js : only three job(receive request -> call service -> send request)

```
const getProduct = async((req,res)=>{
    try{
        const product =await fetchproduct();//call the service
        res.json(product) //send back response

    }catch(err){
         res.status(500).json({error:err.message});
    }
})

```

2. product service.js

```
const product=[
    {name:"viva", price:"10000"},
  {name:"viva", price:"10000"}
]

const fetchproduct= aysnc ()=>{
    return product;
}


//product route.js
 app.route( 'api/product',getproduct);
 app.route('api/product/:name',addproduct)