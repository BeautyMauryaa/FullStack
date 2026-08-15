//basically its puts all login in reusable functin so we don't have to write the same logic again and again
// for example we have three Component..dashboard..adminpanel..studentdashboard..
// now in all three we will use axios same loading error handling..we will
//  have to write same code in all three file so to prevent this we use custom hooks


// folder struct
// src-hooks-userhooks.jsx
//userhooks.jsx:
import { useEffect, useState } from "react";
import axios from 'axios';

// step 2: create function
function useFetch(){
//step 3: states(in which we have three stats(user,loading and error))
const [data,setdata]=useState([]);
const [loading,setloading]=useState(true);
const [error,seterror]=useState(null);

useEffect(()=>{
    const fetchData=async()=>{
        try{
    const res=await axios.get("https://jsonplaceholder.typicode.com/users");
        setdata(res.data);
    }catch(err){
        seterror("something went wrong");
    }finally{
        setloading(false);
    }
};
fetchData();
},[url]);
return {data,loading,error};
}

//export default useFetch;


//how to use this in component:
// user.jsx
// import { useFetch } from "./hooks/userhooks";
// export default function (){
//     const {data:users,loading,error}=useFetch("https://jsonplaceholder.typicode.com/users");

//     if(loading) return <h2>Loading</h2>
//     if(error) return <p>{error}</p>


// return(
//     <div>
//     {user.map(user=>{
//         <p key={user.id}>{user.name}</p>
//     })}
//     </div>
// );
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

  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(res=>res.json())
  //   .then(data=>setuser(data))
  // },[]); //useeffect to fetch tha data from the api


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


//loading->success->error

// //use axios instead of fetch: 
// import axios from 'axios';
// import {useEffect,useState} from "react";

// function App(){
//     const [user,setuser]=useState([]);

//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/pots")
//         .then(data=>setuser(data))
//         .then(error=>console.log(error))
// },[]);

// return(
//     <>
//    {user.map(post=>{
//     <div key={post.id}>
//         <h1>{post.title}</h1>
//         <p>{post.body}</p>
//     </div>
//    })}
//     </>
// );
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