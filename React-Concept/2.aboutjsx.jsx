// jsx- javascript+ html
// allow to write html like code inside javascript
// before jsx we have to use complex ui dom method whic was tedious

//notes: browser cannot read the jsx so its converted this into regular browser
//and this conversion does happend with help of tool babel(it convert the jsx into regular js before reaches the browser)

//conversion how it happen
const name = <h1 className="greet">Hello</h1>;

//how browser see this
const name1 = React.createElement("h1", { className: "greet" }, "hello");
// in jsx instead of class we write className

//rules of jsx:
//since jsx is more powerful than html so there is some strict rule which you have follow whenever write jsx code otherwise code won't compile

//1. single root:  component most return single parent element like you can't return two adjustent tags
//you must have to wrap them inside div or fragment(<>.....</>)
//ex:
// return <h1>HELLO</h1><p>hbkjfdsv</p>; wrong way must have to wrap inside parent element
return (
  <div>
    <h1>HELLO</h1>
    <p>hbkjfdsv</p>
  </div>
);
return (
  <>
    <h1>HELLO</h1>
    <p>hbkjfdsv</p>
  </>
);
fragment;



//2. closing all tags
//- in html some tags don't need to be closed like img or audio
// but in jsx every tag should be closed\
{
  /* <img src="" alt="" /> self closing tags */
}




//3. camelcase property:
// in js some words are reserved like class and for so in jsx we can't use this
// class converted to ClassName;
// for converted to HTMLfor;
// onclick converted to onClick;



//4. embedding js expression
// we can put any js expresion inside jsx using curly braces{}
const fruit = "apple";
const elem = (
  <div>
    <h1>this is {fruit}</h1>
  </div>
);
//what we can put in:
//-variables(let const var)
//-ternary operators
//- fucntion and math operation
//what we can't : if else and for because these are not expression these are statement(we can use ternary or .map() instead of these both)



//5. styling: in this we can't use inline styling we have to make js obj
// class mystyle={
//     color: 'blue',
//   fontSize: '20px', // Note: camelCase, not "font-size"
//   backgroundColor: 'black'
// };
// or use like this <h1 style={{}}></h1>

// function myconponent(){
//     return <div style={mystyle}><h1>hello</h1></div>;
// }



//6. conditional rendering(we can't use if else so we use contional)
//- ternary operator
//- loggical operator AND for ex: {user.isLoggedIn && <button>Login</button> }



//7. redering list(in this every list must have unique key so react can track it)
// class skills=['react','html','css'];
// const listitems=skills.map((skills,index)=>{
//     <li key={index}>{skills}</li>
// })


//8.we can event pass object in tag but we must wrap it inside another curly braces like style
//ex: function Profile(props) {
//   return <h2>{props.person.name}</h2>;
// }

// <Profile person={{ name: "Hedy Lamarr", inventions: 5 }} />






// <div class="card">
//   <img src="profile.jpg" alt="profile">

//   <h2>User Name</h2>
//   <p>This is a description</p>

//   <button onclick="sayHello()">Say Hello</button>
// </div>

//convert into jsx

// class pract={
//     return <div className="card">
//         <img src="profile.jpg" alt="profile" />
//         <h2>user name</h2>
//         <p>this is a description</p>
//         <button onClick="sayHello()">say hello</button>
//     </div>
// }

// function pract(){
//     const user={
//         name:"beauty",
//         desc:"developer",
//         img: "profile.img"
//     }

// function greet(){
//     alert("hello");
// }

// return (
//     <div className="card">
//         <h1>{user.name}</h1>
//         <p>{user.desc}</p>
//         <img src={user.img} alt="profile" />
//         <button onClick={greet}>greet</button>
//     </div>
// );
// }



//pract
// Fix this so it works in a React component return statement
{
  /* <div class="profile-card">
    <h1 style="color: blue">User Profile</h1>
    <img src="avatar.png">
    <p>Name: user.name</p>
    
    <p>Status: if(online){ "Active" } </p>
    
    <label for="email">Email:</label>
    <input type="text" id="email">
</div>

 */
}

function user() {
  const mystyle = {
    color: "blue",
  };

  const user = {
    name: "beauty",
    isOnline: true,
    email: "beautymaurya@gmail.com",
    img: "profile.jpg",
    skill: ["react", "js", "html", "css"],
  };

  return (
    <div className="">
      <h1 style={mystyle}>user profile</h1>
      <img src={user.img} alt="profile_img" />
      <p>Name: {user.name}</p>
      <p>status :{user.isOnline ? "Active" : "away"}</p>
      <label htmlFor={user.email}>Email</label>
      <input type="text" name="" id="email" />
      <h3>Skills: </h3> <br />
      <ul>
        {user.skill.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

//pract:
//  magine you are building a small Todo List. You have an array of task objects. Your goal is to render them with specific logic.

// The Data:

// JavaScript
// const tasks = [
//   { id: 1, text: "Finish React JSX", completed: true },
//   { id: 2, text: "Practice DSA in C++", completed: false },
//   { id: 3, text: "Build Portfolio", completed: false },
// ];
// Your Requirements:
// Map through the tasks array.
// If a task is completed, the text should have a line-through decoration (using inline styles).
// If a task is completed, show a "✅" icon next to it.
// If a task is NOT completed, show a "⏳" icon.
// Add a className of "task-item" to each list element.
// Don't forget the key prop!
// Try to write the code yourself first!
// (I will provide the solution below, but try to mentally or physically code it to see if you remember the syntax for style={{}} and .map())

function Todo() {
  const tasks = [
    { id: 1, text: "Finish React JSX", completed: true },
    { id: 2, text: "Practice DSA in C++", completed: false },
    { id: 3, text: "Build Portfolio", completed: false },
  ];

  return (
    <div className="container">
      <h1>Study planner</h1>
      <ul>
        {tasks.id.map((task) => (
          <li
            key={task.id}
            className="text-items"
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              backgroundColor: "black",
              color: "white",
              marginBottom: "10px",
            }}
          >
            {id}
          </li>
        ))}
        {tasks.completed ? "yes" : "pending"}
      </ul>
    </div>
  );
}

// <h1>Hedy Lamarr's Todos</h1>
// <img
//   src=""https://i.imgur.com/yXOvdOSs.jpg
//   alt="Hedy Lamarr"
//   class="photo"
// >
// <ul>
//     <li>Invent new traffic lights
//     <li>Rehearse a movie scene
//     <li>Improve the spectrum technology
// </ul>

// export default function Todo(){
//     return(
//         <>
//         <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo"/>
//         <ul>
//            <li>Invent new traffic lights</li>
//            <li>Rehearse a movie scene</li>
//            <li>Improve the spectrum technology</li>
//         </ul>
//         </>
//     )
// }//this is fine but in real project we don't do hard coded we do dynamic coded

//here is dynamic way to do this:
export default function Todo() {
  const person = {
    name: "harry",
    imgurl: "https://i.imgur.com/yXOvdOSs.jpg",
    achivements: [
      "Invent new traffic lights",
      "Rehearse a movie scene",
      "Improve the spectrum technology",
    ],
  };

  return (
    <>
      <h1>Welcome to do task of {person.name}</h1>
      <img src={person.imgurl} alt="person-img" />
      <ul>
        {person.achivements.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    </>
  );
}



//pract
// export default function Bio() {
//   return (
//     <div class="intro">
//       <h1>Welcome to my website!</h1>
//     </div>
//     <p class="summary">
//       You can find my thoughts here.
//       <br><br>
//       <b>And <i>pictures</b></i> of scientists!
//     </p>
//   );
// }

export default function Bio(){
    return(
       <div className="intro">
        <h1>Welcome to my website!</h1>
        <p className="summary">
            You can find my thoughts here. <br/> <br/> <br/> And <i>picture</i> of scientists!
        </p>
       </div>
    );
}

// {{ }}-it is basically the obj inside jsx


export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
//convert this into dynamic way:
export default function TodoList() {

  const user={
    name:"harry potter",
    imgurl:"https://i.imgur.com/yXOvdOSs.jpg",
    facts:[
     'Improve the videophone',
      'Prepare aeronautics lectures',
      'Work on the alcohol-fuelled engine'
  ]
  }
   

  return (
   <div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "200px",
  height: "400px"
}}>
    <h1>{user.name}</h1>
    <img src={user.imgurl} alt="" />
    <ul style={{backgroundColor: 'black',
      color: 'pink'}}>
      {user.facts.map((items,index)=>
        <li key={index}>{items}</li>
      )}
      </ul>
      </div>
  )
}
