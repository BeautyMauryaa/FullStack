### CORS:
- cross origin resource sharing
- as per the browser policy: when different origin tried to tak each other then browser block it by default (different origin -> blocked)

- cors allow which origin are allowed to talk to this origin
- without cors it will be blocked by browser
- it is a browser feature only


origin: protocol+ domain + port 

//how to solve cors error:
1. install cors( npm install cors)
2. import in index.js/server.js (main file) - const cors=require("cors");
3. app.use(cors(
 origin:"http:localhost//3000" //now this can interact with your origin 
))

//origin:"*" -> all origin allow(risky to use)
### middleware flow: 
- Request -> CORS middleware -> auth middleware -> route handler -> response

