const http = require("http");

// const server=http.createServer((req,res)=>{
//     // console.log("new req received.");
//     console.log(req);
//     res.end("welcome to http server");
// })

//createserver() -> built in function which create http server
//its provide two obj req and res
//req contain all information about client request(incoming request)
//res contain all information about the response sent by server
//at this point node js only has created the http object

//listen() -> to start accepting req we call listen()
//syntax server,llisten(port,callback):

//port number: decided which application should receive incoming

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    res.end("welcome to the about page");
  } else if (req.url === "/contact") {
    res.end("welcome to the contact page");
  } else {
    res.end("wrong url");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`server running on ${port}`);
});

//common htttp method:
// GET- FETCH DATA
// pUT - CREATE DATA OR INSERT DATA
// PATCH-UPDATE DATA
// DELETE-DELETE DATA

//RETURNING JSON: backend api usually return json:
const server = http.createServer((req, res) => {
  const user = {
    name: "nova",
    role: "developer",
  };
  res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify(user));
});

//setting header: header tells the browser what's type of data type your are sending.

//status code:
//  200 -> Success
//  201->Created
// 400-> Bad Request
//  401 -> Unauthorized
// 403 -> Forbidden
//  404 -> Not Found
// |500  -> Internal Server Error
