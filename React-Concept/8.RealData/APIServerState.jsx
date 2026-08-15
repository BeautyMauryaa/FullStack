//api is like waiter of the restru
//which take your order and send tot he chef and take the food from chef(kitchen) and give to you
//kitchen(chef)-server
//you(customer)-client/frontend/ui
//waiter(api)

//-> Request response cycle:
//whenever we do anyting in chrome these 4 things mostly happen
//1. request- (url-address,action(crud),header(extra information))
//2. processing- server check that request 
//3. response - now after checking as per request server send response in status code (200,400,500) or in body format(json mostly)
//4. re-render- react receive that response and update the ui based on that





//Json structure: frontend and backend talk eachother with the help of json(its look like object but it is string in which key always in "key");
// {
//   ""id": 101,
//   "status": "success",
//   "data": {
//     "name": "Beauty",
//     "role": "Full Stack Developer",
//     "skills": ["React", "Node.js", "AI/ML"]
//   }
// }


//note: Frontend sirf "data maangne" ke liye hai, aur Backend sirf "data dene/save karne" ke liye. React beech mein khada hokar us data ko sundar (UI) banata hai.
//api call: how to control data properly in your react app
// data comes from outside- it is unstable- you have controll it=api call

//client state: only sees on user screen/browser(temp)-usestate,usereducer
//server state: tha data which are saved in database
// to access this data we have to send request to database which is called api call
//you can'nt change this data (permanent data, react query)




//BASIC TASK WE DO WITH API (CRUD OPERATION);
//GET-to get the data from server(receive)
//POST- to send data to the server(create)
//PUT/PATCH- update the previous data which is already in server(update)
//DELETE- to remove the data(delete)



//->AXIOS:
//API integration with Axios:
//axios: promise based http client use to fetch or send data in react application
//it is advanced version of fetch
fetch(url)
.then(res=>res.json)//convert the data into json manually
.then(data=>console.log(data))



//axios

//to use the axios we have to install axios first in our project
//1. npm install axios

import axios from 'axios';
axios.get(url)
.then(res=>console.log(res.data))

const resdata=async()=>{
    try{
   const res=await axios.get('https://api.example.com/data');
   console.log(res);
    }catch(error){
    console.log(error);
    }
};

//why we prefer axios over fetch:
//-cleaner code
//-better error handling
//- auto convert data into json format


//-INTERCEPTOR: its like frontend version of middleware
// request-interceptor-server
//server-interceptor-response

//we always have to write this in index.jsx main file of project
//two we have 1. interceptor.request and 2. interceptor.response


// axios.interceptors.request.use((config)=>{
//     console.log("request sent",config);
//     config.headers.Authorization="Bearer token32132";
//     return config;
// },error()=>{
//     return Promise.reject(error)
// })//before any api call this will run

// axios.interceptors.response.use(

// )