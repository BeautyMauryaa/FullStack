//react component use the props to communicate btw the component
//use to pass data from parent to child component(one way direction only parent->child)

//always come as one object
//props read only(immutable)
//use props inside html tags inside {} <h1>{props}</h1>

//in props you can pass anything array,string,function,object,number..anything..even pass whole component as a props


//but better way to use like this instead of props..unpack the object inside the {};
//function welcome(props){return(<h1>hello props.name</h1>)}---beginner way to use

//profession way: 
// function welcome({name,age,city="ludhiana"}){
//     return(
//         <>
//         <p>{name} is {age} years old lives in {city}</p>
//         </>
//     )
// }


// pract:
// 5. Practice: The "Unbeatable" Coding Challenge
// I want you to build a "MemberCard" system. This will test if you can handle nested objects and functions.
// Requirements:
// Create a Child component MemberDetail.
// It should receive a User Object (containing name and role).
// It should receive a Function called onJoin.
// Inside MemberDetail, display the name and role.
// Add a button "Join Team" that triggers the onJoin function.
// Create a Parent component Team that passes a real name, role, and a function that logs "Welcome to the team!" to the console.
// Write the code for both components. If you can pass an object and a function successfully, no one can beat you in Props!



// app.tsx:
// @ts-ignore(to ignore type script error)
// import MemberDetail from "./component/MemberDetail";

// export default function App() {
//   // Move the function here (inside App, but not inside another function)
//   const onjoin = () => {
//     console.log("Welcome to the Team!");
//     alert("Welcome to the team!");
//   };

//   const memberdata = {
//     name: "beauty",
//     roll: "05",
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


// //component/memberaction:
// export default function MemberAction({ onjoin }) {
//   return (
//     <>
//       <button onClick={onjoin}>Join Team</button>
//     </>
//   );
// }


// //component/memberdetail: 
// import MemberAction from "./MemberAction";

// export default function MemberDetail({ name, roll, onjoin }) {
//   return (
//     <div>
//       <h5>Name: {name}</h5>
//       <h5>rollno: {roll}</h5>
//       <MemberAction onjoin={onjoin} />
//     </div>
//   );
// }


//pract:
//component/memberdetails and memberaction.jsx

export default function MemberAction({ onjoin }) {
  return (
    <>
      <button onClick={onjoin}>Join Team</button>
    </>
  );
}

import MemberAction from "./MemberAction";

export default function MemberDetail({ name, roll, onjoin }) {
  return (
    <div>
      <h5>Name: {name}</h5>
      <h5>rollno: {roll}</h5>
      <MemberAction onjoin={onjoin} />
    </div>
  );
}



//now main app: app.tsx(to ignore the typescript error we will use @ts-ignore)
// @ts-ignore
import MemberDetail from "./component/MemberDetail";

export default function App() {
  // Move the function here (inside App, but not inside another function)
  const onjoin = () => {
    console.log("Welcome to the Team!");
    alert("Welcome to the team!");
  };

  const memberdata = {
    name: "beauty",
    roll: "05",
  };

  return (
    <div>
      <h1>Member detail card</h1>
      {/* Pass the function as a prop called 'onjoin' */}
      <MemberDetail
        name={memberdata.name}
        role={memberdata.roll}
        onjoin={onjoin}
      />
    </div>
  );
}