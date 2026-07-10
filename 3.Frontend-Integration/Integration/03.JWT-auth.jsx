// //authentication flow in frontend:
// User
//    │
//    ▼
// Login Form
//    │
//    ▼
// React                                           
//    │ email + password
//    ▼
// Express Backend
//    │
//    ▼
// Verify User
//    │
//    ▼
// Generate JWT
//    │
//    ▼
// Send Token
//    │
//    ▼
// React stores token
//    │
//    ▼
// Every protected request
// Authorization: Bearer <token>
//    │
//    ▼
// Backend verifies token
//    │
//    ▼
// Response

//login: user enter crendential POST /login 
// backend check crendential 
const token = jwt.sign(
    {id: user.id},
    SECRET_KEY
)

//if correct backend return token 

//frontend store that token
localStorage.setItem("token",token) 
// or
sessionStorage.setItem("token",token)

//every protected request include that token
axios.get("/profile",{
    headers:{
        Authorization:`Bearer ${token}`
    }
})

//before give the response of that request backend verify the token
//middleware check that token:
//if valid : next()
// if not : unauthorize 401
