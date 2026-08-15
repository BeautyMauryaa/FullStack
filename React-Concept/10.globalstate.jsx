//global state- prevent from prop drilling
//data or stats that all component share to eachother...or we can say...when multiple component needs that same data then we write that data in global state component..it reduce repeating 

//context api: it is built in system of react mainly used when data is static (doesn't need any frequent changes in data)
//like theme toggle,user authentication,lang(hindi/english)
//we mostly avoid to use this in big project: because if any vallue changes in data it re-render the whole component even there is no need to re-render

//step 1: create context
import { Children, createContext,useState  } from "react";
export const AuthContext =createContext();

//step2: create provider(suplier)
export const AuthProvider=({Children})=>{
    const[user,setuser]=useState(null)
    const login=(userdata)=>setuser(userdata);
    const logout=()=>setuser(null);

    return(
        <AuthContext.Provider value={{user,login,logout}}>
 {Children}
      </AuthContext.Provider>
    );
};



//Zustand(the modern powerhouse): state management lib used to mannage the app data
//step 1: npm install zustand
//step 2: create store:
import {create} from 'zustand';
const useStore=create((set)=>({
user:"Nova",
cart:[],
setuser: (newUser)=> set({user:newUser}),
addtocart: (item)=>set({cart:[...State.cart,item]})
}));

export default useStore;


//how to use this:
import useStore from "./usestore"
function Navbar(){
    const user=useStore((state)=>state.user);//component only re-render the selected item
    return(
        <h1>{user}</h1>
    )
}



// Local state → useState
// Shared simple → Context
// Shared complex → Zustand