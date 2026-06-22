
// Authentication vs Authorization
//- is the user is valid (password match email match) and authorization(its check what user are allowed to do )

// Identity verification:
//- it verify identity using:
// password , OTT, FINGERPRINT, OAUTH
//ex: user enter detail to login page -> server checks db -> is pass matches -> identity verified


// Login flow:
//user enter detail to login page -> server checks db -> is pass matches -> identity verified -> allowed to login
// Frontend
//     ↓
// POST /login
//     ↓
// Find User
//     ↓
// Compare Password
//     ↓
// Success



// Signup flow:
// user enter detail -> server checks -> for ex email and phone no. is it already used -> if yess then error and if no -> then store pass in hash -> allwoed to sign up
//diagram:
// Frontend
//     ↓
// POST /signup
//     ↓
// Backend
//     ↓
// Validate Data
//     ↓
// Hash Password
//     ↓
// Save User
//     ↓
// Success Response



// Session-based auth and Token-based auth: 
//this process happens after the completetion of login and sign up
// after login or signup user allowed to access profile dashboard etc..but how does server knows this is still authorized user after sometime..
// thats why we used session based auth and token based auth


//session-based auth: old school method.
// 1.user login 
// 2. server creates session id for ex: ABC123G
// 3. store it in db,redis,server memory
// 4. send cookies to browser


// in future request:
// 1. browser automatically send cookies 
// 2. server checks does session ABC123G still exist 
// 3. if exist user is authenticated

//session flow:
// Login
//  ↓
// Server creates session
//  ↓
// Session stored on server
//  ↓
// Session ID sent as cookie
//  ↓
// Browser sends cookie every request
//  ↓
// Server validates session


//token based auth: 
//modern approach: after login instead of session server creates JWT token ex: eyJhbGciOiJIUz...
//server send that token to frontend..frontend stores that token and send with every request 
// ex: GET /profile Authorization: Bearer JWT_TOKEN
// server verify that token if valid authenticated

//work flow:
// Login
//  ↓
// Server generates JWT
//  ↓
// Frontend stores token
//  ↓
// Frontend sends token
//  ↓
// Backend verifies token
//  ↓
// Access Granted


// | Session               | JWT Token                 |
// | --------------------- | ------------------------- |
// | Stored on Server      | Stored on Client          |
// | Server remembers user | Token carries information |
// | Easy logout           | Harder logout             |
// | More server memory    | Less server memory        |
// | Traditional apps      | Modern APIs               |




//authentication in only 3 stesp:
//user proves identity -> server verify that identity -> server remember that identity -> (session/token)

