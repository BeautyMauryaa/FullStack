// react rule: on every render it runs the all function which is present in app..if there is use of that function or not ut run even value haven't changes...
//so to stop this we uasing usememo
//basically it stop to run the fuction again and again till value(dependecy)  of that function haven't change.


import { useMemo, useState} from "react";
export default function App(){
    const [count,setcount]=useState(0);
    const [num,setnum]=useState(10);

    const fact=useMemo(()=>{
        let ans=1;
        for (let i=1;i<=num;i++){
         ans*=i;
        }
        return ans;

    },[num]);

    return(
        <div>
  <h1>Factorial of {num} is {fact}</h1>
  <button onClick={()=>setnum(prev=>prev+1)}>Change num</button>
  <hr />

  <button onClick={()=>setcount(prev=>prev+1)}>Increment count</button>
        </div>
    )
}
