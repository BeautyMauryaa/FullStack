// suppose want to use gemini ai model -> we cann't directly use it
// process: 
//1. gemini will provide api 
//2. application send request through api.

// user -> gemini api -> google ai model -> response 

//API KEY: Unique secret key issued by api provider that authenticates the application and authorize it to access the provid services
// User
//    │
//    ▼
// JWT
// (Identity)

// Application
//    │
//    ▼
// API Key
// (Identity of the application)


//never hardcoded the api key
//always stored in .env file
