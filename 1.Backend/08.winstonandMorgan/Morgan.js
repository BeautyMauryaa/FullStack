//http request logger (logs all requests to the console)
//for ex: Http method, url, status code, response time etc

//1. install
// npm install morgon


//2. basic setup
const express =require('express');
const morgon = require('morgon');
const app =express();
app.use(morgon('dev')); //dev is a predefined format for logging requests


//workflow:
// client -> express server -> morgan middleware  -> controller -> response


//notes:
//morgan logs before the controller is executed, so it logs the request details before sending the response back to the client. 


//visualization of workflow:
// Client sends request
//         │
//         ▼
// Morgan sees request
//         │
//         ▼
// Route Handler runs
//         │
//         ▼
// Database Query
//         │
//         ▼
// res.send()
//         │
//         ▼
// Response finished
//         │
//         ▼
// Morgan prints:

// GET /users 200 15 ms