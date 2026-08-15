// API integration with Axios, loading states, error states, useEffect
//  with fetch, displaying real data in components or async logic in react



//the core concept:
//useeffect+fetch: but now we are using axios because its better than fetch
//why useffect - because it runs after rendering the component and react fetch data after rendering the component thats why we use useEffect

//api integration with axios
//step 1:
import { useEffect, useState } from "react";
import axios from 'axios';

// step 2: create function
function user(){
//step 3: states(in which we have three stats(user,loading and error))
const [user,setuser]=useState([]);
const [loading,setloading]=useState(true);
const [error,seterror]=useState(null);


//step 4: use useeffect:
// useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(res=>{
//         setuser(res.data);
//         setloading(false);
//     })
//     .catch(err=>{
//         seterror("something went wrong");
//         setloading(false);
//     });
// },[]);


//by using async logic..
//step 4: use useeffect:
useEffect(()=>{
    const fetchUser=async()=>{
        try{
    const res=await axios.get("https://jsonplaceholder.typicode.com/users");
        setuser(res.data);
    }catch(err){
        seterror("something went wrong");
    }finally{
        setloading(false);
    }
};
fetchUser();
},[]);


//condition
if(loading) return <h2>Loading</h2>
if(error) return <p>{error}</p>

return(
    <div>
    {user.map(user=>{
        <p key={user.id}>{user.name}</p>
    })}
    </div>
)
}

