- it is a fucntion...it sit btw request -response cycle
- it has free will to do anything with the incoming request and outgoing response
- it can terminate the request- response cycle
- execute any code
- or can call to the another middle ware or next() function


### workflow:
- client -> middleware -> route -> response

for ex:
client -> GET /profile
- before showing profile it checked is the user is real/logged in , log request detail, validate data, check permisson
- it can also work without middle but we have to write same code with every request


```
const express= require("express");
const app=express();

function logger(req,res,next){
    console.log("request received");
    next();
}

app.use(logger);
app.get("/",(req,res)=>{
   res.send("home page");
})

app.listen(3000);
```

### parameters:
- function middleware(req,res,next)
- req : reqest object (contain req url method all information about client req)
- res:  res object 
- next() : it is function to call the next middleware or route when current middleware work done
- without next() code will stuct bcoz the express doesn't knwo what to do next.
- call back argument to the middleware function

- app.use() -> run this middleware first for every request
- for ex: request -> app.use(logger) -> then continue 

Request
  ↓
logger middleware
  ↓
Route Handler
  ↓
Response

//now whenever any request received logger console will print first
//for ex every request of user/client it will check is request is coming from correct user/is user authorized and all these things


ex:

```
function auth(req,res,next){
    console.log("user logged in");
    next();
}

app.get("/profile",auth,(req,res)=>{
    res.send("profile page");
})
``` 
- this is route sepcific url only run profile url


### multiple middleware:
```
app.get("/profile", 
(req,res,next)=>{
    console.log("middleware 1");
   next();
},
(req,res,next)=>{
    console.log("middleware 2");
    next();
},
(req,res)=>{
    res.send("user profile");
});

```
- output: middleware 1 -> middleware 2-> profile



### built in middleware: 
1. express.json() -> convert the json body into js object (without this- undefined)
2. express.static() -> used to serve static file 
- app.use (express.static("public")); img,logo,png etc
/profile/logo.png

3. express.urlencoded() -> used when data comes from html file
ex: 
```
<form method="POST">
    <input name="username">
    <button>Submit</button>
</form>

-> middlware app.use(express.urlencoded({extended: true})); (extended true: can handle nested object and array)
-> console.log(req.body);
-> { username:"nova"};

```
### error handling:
- it has 4 parameters err,req,res,next
```
app.use((err,req,res,next){
    res.status(500).json({
        message: err.message;
    })
    
})
```


### mvc project middleware order:
1. general
2. specific
3. error handler(it should always be in last)

- client request flow structure: 
client -> express.json() -> logger -> COrs/security -> auth middleware -> route -> controller -> service -> database -> response.


