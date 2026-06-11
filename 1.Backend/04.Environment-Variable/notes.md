- stored outside the code that application can access during runtime through process.env
- (keeping configuration seperate from code, for the security purpose)

- most common things we stored in.env file:
- mongo db account url -> MONGO_URL="NDKCNMDC"
- port number -> port=8000
- jwt secret -> JWT_SECRET ="CANBEANYTHING"
- api keys   -> OPEN AI API KEYS , ANYTYPES OF API KEYS
- environment type -> NODE_ENV=development

### process.env?
- object containing environment variable
- to access that variable: for ex port=3000
process.env.port

## dotenv: 
- load environment varibale from .env file into global process.env object
1. npm install dotenv
2. create .env file
3. at the top of entry file(server.js) require("dotenv").config();
 console.log(process.env.port) or const port =process.env.port-> now value from .env are available. and changing the port only require to change in .env file only one file need to change


# NODE_ENV: tell application where its running
ex: if(process.env.NODE_ENV==="development){
    console.log("debuf logs enabled);
}


.env.development
.env.test
.env.production


### note: 
- never commit .env 
- add in gitignore