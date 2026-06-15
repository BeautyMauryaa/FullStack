- it limits how many request a user can make in a certain time period.
- for ex: max 100 req, per 15 min, per ip address
- if someone send request 1 to 100 and then request 101 then
- server block further requests until the time window reset.


### why use it?
- 1. prevent api abuse
- 2. prevent brute force attacks 
- 3. protect resources(database are expensive rate limiting prevent one user for consumin all resources).


### express implementation:
1. npm install express-rate-limit
2. basic setup:
```
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15*601000; 
    max:100;
})

app.use(limiter);
```


### how it works:
- request -> rate limit middleware -> count request -> under limit -> if(yes) - next middleware or route and if (no) 429 error

- response when limit exceeds: 
```
{
    message: "too many request";
}
```

- limit login route only:
```
const loginlimiter=ratelimiter({
    windowMs: 15*60*1000;
    max:5;
});


app.post("/login",loginlimiter, logincontroller);
```

5th login attem -> 6th error 429

### mvc folder struct:
project/
│
├── middleware/
│   └── rateLimiter.js
│
├── routes/
├── controllers/
└── server.js


- middleware/ratelimiter:
``` 
const rateLimiter=require("export-rate-limiter");
module.exports=rateLimiter({
    windowMs: 15*60*1000;
    max: 100;
})


```

- server.js
```
const limiter =require("/middleware/ratelimiter.js");
app.use(limiter);
```