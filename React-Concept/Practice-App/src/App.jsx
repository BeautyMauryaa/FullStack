// // // @ts-ignore
// import MemberDetail from "./component/MemberDetail";

// export default function App() {
//   // Move the function here (inside App, but not inside another function)
//   const onjoin = () => {
//     console.log("Welcome to the Team!");
//     alert("Welcome to the team!");
//   };

//   const memberdata = {
//     name: "beauty",
//     roll: "5",
//   };

//   return (
//     <div>
//       <h1>Member detail card</h1>
//       {/* Pass the function as a prop called 'onjoin' */}
//       <MemberDetail
//         name={memberdata.name}
//         role={memberdata.roll}
//         onjoin={onjoin}
//       />
//     </div>
//   );
// }

// import { useState } from "react";
// import ProductList from "./component/ProductList";
// import SearchList from "./component/SearchList";

// export default function App() {
//   //const products = ["iPhone", "Samsung", "OnePlus", "Nokia", "Realme"];
//   const [search, setsearch] =
//     useState[("iPhone", "Samsung", "OnePlus", "Nokia", "Realme")];

//   return (
//     <div>
//       <SearchList setsearch={setsearch} />
//       <ProductList products={products} search={search} />
//     </div>
//   );
// }

// // things to remember: state lives in one place don't create space everywhere(parent)
// // map only when want to render this
// // Input → setState → state updates → list filters → UI updates

//The "Sync-Inputs" (Lifting State Up):

// import SyncContainer from "./component/SyncContainer";
// export default function App() {
//   return <SyncContainer />;
// }

// import { useState } from "react";
// import Navbar from "./component/Navbar";
// import Content from "./component/Content";

// export default function App() {
//   const [darkmode, setdarkmode] = useState(false);

//   const toggletheme = () => {
//     setdarkmode((prev) => !prev);
//   };

//   return (
//     <div>
//       <Navbar toggletheme={toggletheme} />
//       <Content darkmode={darkmode}/>
//     </div>
//   );
// }

// import {useState} from "react";
// export default function App(){
//     const [count,setcount]=useState(0);
//     return(
//         <>
//        <h1>{count}</h1>
//        <button onClick={()=>setcount((prev)=>prev+1)}>+</button>
//        <button onClick={()=>setcount((prev)=>prev-1)}>-</button>
//         </>
//     );
// }

//input field

// import {useState} from "react";
// export default function App(){
//     const [text,settext]=useState("");
//     return(
//         <div>
//             <input type="text" value={text}
//             onChange={(e)=>settext(e.target.value)}
//             />
//             </div>
//     )
// }

//todo list:
// import {useState} from "react";
// export default function todo(){
//     const [text,setText]=useState("");
//     const [list,setList]=useState([]);

//     const add=()=>{
//         setList(prev=>[...prev,text]);
//         setText("");
//     }

//     return(
//         <div>
//             <button onClick={add}>Add Task</button>
//             <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>

//             {list.map((item,index)=>(
//                <p key={index}>{item}</p>
//             ))}
//         </div>
//     )
// }

//toggle button:
// import { useState, useEffect } from "react";
// export default function toggle() {
//   const [ison, setison] = useState(false);
//   const [text, setText] = useState("");
//   const [list, setList] = useState([]);

//   const add = () => {
//     setList((prev) => [...prev, text]);
//     setText("");
//   };

//   const toggle = () => {
//     setison((prev) => !prev);
//   };

//   useEffect(() => {
//     console.log("button clicked");
//   }, [ison]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <button onClick={add}>Add Task</button>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       {list.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//       <h1>The button {ison ? "on" : "off"}</h1>
//       <button onClick={toggle}>switch{ison ? "on" : "off"}</button>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// export default function App() {
//   const [count, setcount] = useState(0);
//   const [text, settext] = useState("");

//   useEffect(() => {
//     console.log("app started");
//   }, []);

//   useEffect(() => {
//     console.log(`count updated to ${count}`);
//   }, [count]);

//   useEffect(() => {
//     document.title = text || "react app";
//   }, [text]);
//   return (
//     <div>
//       <h1>Count button</h1>
//       <h2>{count}</h2>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => settext(e.target.value)}
//         placeholder="type something"
//       />
//       <button onClick={() => setcount((prev) => prev + 1)}>+</button>
//       <button onClick={() => setcount((prev) => prev - 1)}>-</button>
//     </div>
//   );
// }

//import { useEffect, useRef, useMemo } from "react";
// export default function App() {
//   const CountRef = useRef(0);
//   function Increment() {
//     CountRef.current++;
//     console.log(CountRef.current);
//   }
//   return <button onClick={Increment}>click</button>;
// }

// import React, { useState, useMemo } from "react";
// export default function App() {
//   const [count, setcount] = useState(0);
//   const [num, setnum] = useState(10);

//   const fact = useMemo(() => {
//     let ans = 1;
//     for (let i = 1; i <= num; i++) {
//       ans *= i;
//     }
//     return ans;
//   }, [num]);

//   return (
//     <div>
//       <h1>
//         factorial of {num} is {fact}
//       </h1>
//       <hr />
//       <p>Count: {count}</p>
//       <button onClick={() => setnum((prev) => prev + 1)}>Change num</button>
//       <button onClick={() => setcount((prev) => prev + 1)}>
//         Increment num
//       </button>
//     </div>
//   );
// }

// import { useContext, useReducer } from "react";
// import Child from "./component/child";
// export default function App() {
//   const UseContext = createContext();
//   const user = "beauty";
//   return (
//     <div>
//       <h1>child grandchild practice</h1>
//       <p>sending user: {user}</p>
//       <UseContext.Provide value={user}>
//         <Child />
//       </UseContext.Provide>
//     </div>
//   );
// }
// import { useEffect } from "react";
// import axios from "axios";

// // step 2: create function
// function user() {
//   //step 3: states(in which we have three stats(user,loading and error))
//   const [user, setuser] = useEffect([]);
//   const [loading, setloading] = useEffect(true);
//   const [error, seterror] = useEffect(null);

//   //step 4: use useeffect:
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         setuser(res.data);
//         setloading(false);
//       })
//       .catch((err) => {
//         seterror("something went wrong");
//         setloading(false);
//       });
//   }, []);

//   //condition
//   if (loading) return <h2>Loading</h2>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       {user.map((user) => {
//         <p key={user.id}>{user.name}</p>;
//       })}
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserDashboard = () => {
//   // 1. Initialize States
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // 2. The Async Logic
//   const loadUserData = async () => {
//     try {
//       setLoading(true); // Start loading
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');

//       // 3. Update State with Real Data
//       setUsers(response.data);
//       setLoading(false); // Stop loading
//     } catch (err) {
//       setError("Data fetch nahi ho paya. Please try again!");
//       setLoading(false);
//     }
//   };

//   // 4. Trigger on Mount
//   useEffect(() => {
//     loadUserData();
//   }, []);

//   // 5. Display Logic (Conditional Rendering)
//   if (loading) return <div className="loader">Loading your data... ⏳</div>;
//   if (error) return <div className="error-msg">{error}</div>;

//   return (
//     <div className="container">
//       <h2>Active Users</h2>
//       <div className="grid">
//         {users.map((user) => (
//           <div key={user.id} className="card">
//             <h3>{user.name}</h3>
//             <p>Email: {user.email}</p>
//             <p>Company: {user.company.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// // Importing our custom components & logic
// import RegistrationForm from './component/registerform';
// import UserDashboard from './component/UserDashboard'; // Jo humne API integration mein sikha tha

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         {/* --- Navigation Bar --- */}
//         <nav className="bg-blue-600 p-4 text-white shadow-lg">
//           <div className="container mx-auto flex justify-between">
//             <h1 className="text-xl font-bold">My Pro App</h1>
//             <div className="space-x-4">
//               <Link to="/" className="hover:underline">Register</Link>
//               <Link to="/dashboard" className="hover:underline">Dashboard</Link>
//             </div>
//           </div>
//         </nav>

//         {/* --- Main Content Area --- */}
//         <main className="container mx-auto p-6">
//           <Routes>
//             {/* Step 1: Form with Validation & API Call logic */}
//             <Route path="/" element={
//               <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//                 <h2 className="text-2xl mb-4 font-semibold">Create Account</h2>
//                 <RegistrationForm />
//               </div>
//             } />

//             {/* Step 2: Displaying Real Data from API with Interceptors */}
//             <Route path="/dashboard" element={<UserDashboard />} />

//             {/* Fallback for 404 */}
//             <Route path="*" element={<h2>404: Page Not Found!</h2>} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import { useForm } from "react-hook-from";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formstate: { error },
//   } = useForm();

//   return (
//     <form>
//       <div>
//         <label>Firstname:</label>
//         <input type="text" {...register("first")} />
//       </div>
//     </form>
//   );
// }


// 1.Fetch data and show it on screen
//api practice:
// import {useState,useEffect} from "react"

//  export default function App(){
//   const [user,setuser]=useState([]);

//   // useEffect(()=>{
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //   .then(res=>res.json())
//   //   .then(data=>setuser(data))
//   // },[]); //useeffect to fetch tha data from the api


//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res=>res.json())
//     .then(data=>setuser(data))
//   },[]);

//   return(
//     <>
//     <h1>User Lists:</h1>
//     {/* {user.map(user=>(
//       <p key={user.id}>{user.name}</p>
//     ))} */}
// {user.map(posts=>(
//  <div key={posts.id}>
//   <h3>{posts.title}</h3>
//   <p>{posts.body}</p>
//  </div>
// ))}
//     </>
//   );
// }

// //export default App;


// 1.Fetch data and show it on screen
//2. add loading and error handling
//  import {useState,useEffect} from "react"
//   export default function App(){
//   const [user,setuser]=useState([]);
//   const [loading, setloading]=useState(true);
//   const [error,seterror]=useState("");

//   // useEffect(()=>{
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //   .then(res=>res.json())
//   //   .then(data=>setuser(data))
//   // },[]); //useeffect to fetch tha data from the api


//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/poss")
//     // .then(res=>res.json())
//     // .then(data=>setuser(data))

//     .then(res=>{
//     if(!res.ok) throw new Error ("Failed to fetch")
//       return res.json()
//     .then(data=>setuser(data))
//     .catch(err=>seterror(err.message))
//     .finally(()=>setloading(false));

//     if(loading) return <h1>loading...</h1>
//     if(error)  return <h1>{error}</h1>
//     })
//   },[]);

//   return(
//     <>
//     <h1>User Lists:</h1>
//     {/* {user.map(user=>(
//       <p key={user.id}>{user.name}</p>
//     ))} */}
// {user.map(posts=>(
//  <div key={posts.id}>
//   <h3>{posts.title}</h3>
//   <p>{posts.body}</p>
//  </div>
// ))}
//     </>
//   );
// }



//3.use axios instead of fetch: 
// import axios from "axios";
// import { useEffect, useState } from 'react';
// function App(){
//   const [user,setuser]=useState([]);

//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/pots")//404 error not found
//     .then(res=>setuser(res.data))//autoconvert into json
//     .then(err=>console.log(err))//no need specify the error
//   },[]);
//  return(
//   <>
//   <h1>user list:</h1>
//   {user.map(user=>(
//    <div key={user.id}>
//     <h1>{user.title}</h1>
//     <p>{user.body}</p>
//    </div>
//   ))}
//   </>
//  );
// }

// export default App;

//4.post APi(add user):using axios:

import axios from 'axios'
import { useState } from 'react';


function App(){

  const[user,setuser]=useState([]);
  const AddUser=async()=>{
    const res=await axios.post("https://jsonplaceholder.typicode.com/users",{//data i want to send with post  method
      name:"beauty",
      email:"beauty@gmail.com"
    }); //no need to convert into the json bacause we are using axios auto convert

    //update ui
    setuser(prev=>[...prev,res.data]);
  }

  return(
    <>
    <button onClick={AddUser}>Add user</button>
    {user.map(user=>(
      <p key={user.id}>{user.name}</p>
    ))}
</>
  )
}

export default App;