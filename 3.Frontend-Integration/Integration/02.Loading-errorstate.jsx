// //when we fetch data there are usally three layer:
// //1.loading -> success else fail(error)

// import { useState } from "react";


// //1.loading while waiting for api response:
// const[loading, seLoading]= useState(true);
// //in ui: 
// if(loading){
//     return( <div>
//         <h4>
//             loading...
//         </h4>
//     </div>
//     )
// }


// //error state:
// // if request failed or any type of error
// const [error, setError]=useState(true);

// //ui:
// if(error){
//     return( <>
//     <h4>{error}</h4>
//     </>
//     )
// }


// //success state:
// return(
// <div>
//     {user.map(user=>{
//         <p key={user.id}>
//             {user.name}
//         </p>
//     })}
// </div>
// )


import axios from "axios";
import { useEffect, useState } from "react";

function user(){
    const[User,setUser] = useState;
    const[loading,setLoading]=useState(true);
    const[error, setError]=useState(true);


    useEffect(()=>{
        axios
        .get("api/user")
        .then((res)=>{
            setUser(res.data);
        })
        .catch(()=>{
            setError("Failed to fetch data")
        })
        .finally(()=>{
            setLoading(false)
        });
    },[]);

    if(loading) return (
        <h4>loading..</h4>
    )
    
    if(error) return(
        <h4>{error}</h4>
    )

    return (
        <div>
            {User.apply((user)=>{
                <p key={user.id}>{user.name}</p>
            })}
        </div>
    )
}