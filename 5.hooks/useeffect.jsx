//it shows side work which doesn't show on window it show on console...for example..
//for example we have type something in input placeholder then with the help of useeffect we can print on console.use types something..
//for calling api..or any type of external work we use useeffect


//in short: jab bhi component ko kisi external work se deal krna hota ahi then useeffect use krte hai...
//so hota ye hai ki for exa mujhe ek api call krna hai tab react bolta bhyi ye mera kaam nhi hai mai bss ui related kaam krta hu ye bahar se data lane ka kaam mera nhi hai
//toh tum ek kaam esko useeeffct me daal do wo kr lega

useeffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res)=>res.json())
  .then((data)=>console.log(data));
})


//syntax :
import { useState, useEffect, use } from "react";
export default function toggle() {
  const [ison, setison] = useState(false);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    setList((prev) => [...prev, text]);
    setText("");
  };

  const toggle = () => {
    setison((prev) => !prev);
  };

  useEffect(() => {
    console.log("button clicked");
  },); //if we don't give a dependency array then it will run on every render no matter you clicked button or you type something ..


  useEffect(() => {
    console.log("button clicked");
  }, [ison]);//when we give dependency array then it will only when some action work on given dependency 


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={add}>Add Task</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <h1>The button {ison ? "on" : "off"}</h1>
      <button onClick={toggle}>switch{ison ? "on" : "off"}</button>
    </div>
  );
}


//useeffct run::when react update the ui
//react work flow:
//stats and props run
//renders
//dom(ui updated)
//then useeffect

//syntax:
useEffect(()=>{
    //side effect logic..
},[dependency])


//side effect logic - anything which is related to outside world doesn't affecting the ui
//api call.
//settimeout,internval
//console.log
//local storage
//event listeners

//we have three way use useeffct:
//1. no dependency array(default):
//-it runs on every render (can cause the infinite logs(avoid to use this))
// useEffect(()=>{
//     console.log("update");
// })

//2. with dependency array:(useeffct kab chlega)
// useEffecct(()=>{
//   console.log("button clicked");
//  },[dependecy])

//3.empty dependency array:(useeffect run only once)
// useEffect(()=>{
//     console.log("run only once")
// },[])- use for api call and intial setup


//note: useffct depend on value not variable 
// if value changes it will work otherwise not
//ex in count


//react rule: only compare old value and new value if it doesn't match it re-render the ui
//or in useeffect if both diff run useeffect



import { useState, useEffect } from "react";
export default function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log(`count updated to ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Count button</h1>
      <h2>{count}</h2>
      <button onClick={() => setcount((prev) => prev + 1)}>+</button>
      <button onClick={() => setcount((prev) => prev - 1)}>-</button>
    </div>
  );
}