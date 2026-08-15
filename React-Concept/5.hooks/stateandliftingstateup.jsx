//state: it is basically the component specific memory
//in simple js when we change some variable ui doesn't care
//but in react when state changes react think something is changed i have to render the ui right now

const { useState } = require("react");


//in short: it is like memory react continously watching states when it changes react re-renders the component automatically

// ex:
// let count=0;(ui will not update)
// const[count,setcount]=useState(0);//ui will update automatically



//to update the component with new data two things needs to be happen
//1.retain the data btw renders
//2.trigger react to re-renders the compoonent with new data
// and both things are provide by usestate hook:


//hook: it is function whihc allow you to use important feature (like stats ,lifecycle) inside functional component
//and in react whatever starting with use is comes under hook
//there are some rules of hook:
//1. it can be only called top of inside function means you cannot called inside conditional statement loops or funciton

//inside function like this:
function app(){
    useState();
}


function memoru(){
    if(true){
        useState(0); //wrong way
    }
}

//right way is this
function memory(){
    const [count,setcount]=useState(0); //right way
}


//the syntax of useState:
function App(){
    const[value,setvalue]=useState(intialstate);
}
//-value=the current snapshot data
//-setvalue=only wany to change data
//- initialstate=when state start

//to use useState we have to import this in top of file like this
import { useState } from "react";


//lifiting state up:
//the problem:
//1. in react data only flow in down direction(parent-child):
//so move the useState in that child component which are closer to the parent component


//shortcut:
//identify: common parent of the component that need same data:
//define; const[value,setvalue]=useState(intialstate); inside that parent
//distribute: data down: pass the value as props to the child that display it
//            function down: pass the setvalue function to the child that will displaye it

// 1. THE BOSS (Parent)
function Match() {
  const [score, setScore] = useState(0); // State LIFTED here

  return (
    <>
      <Display score={score} />           {/* Receives Data */}
      <Button onGoal={() => setScore(score + 1)} /> {/* Receives Function */}
    </>
  );
}

// 2. THE RECEIVER (Child)
function Display({ score }) {
  return <h1>Score: {score}</h1>;
}

// 3. THE TRIGGER (Child)
function Button({ onGoal }) {
  return <button onClick={onGoal}>Goal!</button>;
}


//pract:
//component/countbutton.jsx
export default function CounterButton({ setCount, count }) {
  return (
    <div>
      <button onClick={() => (setCount = count + 1)}>+</button>
      <button onClick={() => (setCount = count - 1)} disabled={count === 0}>
        -
      </button>
    </div>
  );
}

//component/buttondisplay.jsx
export default function CounterDisplay({ count }) {
  return <h1>count:{count}</h1>;
}

//aps.jsx
// @ts-ignore
import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CounterDisplay Count={count} />
      <CounterButton setCount={setCount} Count={count} />
    </div>
  );
}

// (prev) => prev(this means take the previous value and return the same value)

//state is isolated(means if we are using two usestate in one component then changing in usestate doesn't effect other)


//we have two situtaion :
//1.if the only one component have a need of usestate then keep state inside the component
//2.if the multiple component have a need os that usestate put it inside the nearest parent component
//(and this is called lifting state up)