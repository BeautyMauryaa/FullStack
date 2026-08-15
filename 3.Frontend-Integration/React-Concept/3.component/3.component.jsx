//component:small and reusable piece of code that are resposible for specific ui
//it is the foundation...this is the base on which we build ui in react



//1.THE ANATOMY(WHAT MAKES A COMPONENT):
//there is two way to define the component(old and new)
//in old way: it is basically the class based component 
//new way: this is modern and mostly we are going to use this(function based object)


//rule to identify component:
//1. component name must be pasacase(means component name word first letter should be capital ex: usercard(wrong)- UserCard)
//why: because react distinguish btw the html(lowercase) and component(uppercase) if it sees profile then it think this is html part and searching for html if don't found and then return nothing



//2. the inpput(props): it doesn't care about what data it gets it just display whatever it get as input

//3. the boundary(single root): it can only return one thing

//for ex:
export default function UserInfo(){

    const userdata={
        name:'beauty maurya',
        desc:'mern developer',
        skill:['react','html','ai/ml','aws'],
        education:'BCA from lovely professional university',
        addres:'delhi'
    }
    return(
        <div>
            <h1>welcome to user profile</h1>
            <h4>{userdata.name}</h4>
            <h4>{userdata.desc}</h4>
             <ol>
                {userdata.education.map((item,index)=>
                   <li key={index}>{item}</li>
            )}
             </ol>
             <h4>{userdata.addres}</h4>
        </div>
    )
}


//Note: things to remember:
//2. Component composition(the lego strategy): be ensure every component should follow single responsible principal(one component only shoud does one dask)
//don't build one gaint component(this is wrost)
// for example:
// Small, reusable Lego bricks
const Icon = () => <i className="star-icon" />;
const Label = () => <span>Click Me</span>;

// The "Lego" Strategy: Composing a Button using smaller bricks
const IconButton = () => {
  return (
    <button>
      <Icon />
      <Label />
    </button>
  );
};




// the pro rule's:
//1.pure component: same input(props)=same ouput
//2.nested component: never defined a component inside another function:
//- ex: function parent(){
// function child(){return <><h1>i am slow!</h1></>}} //react start to recreate this which slow the webiste

//3. folder struture: component live in their own folder src/component/Button/button.jsx ...button.css

// function photo(){
//     return(
//      <img src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"/>
//     );
// }

// export default function UserImg(){
//     return (
//         <section>
//             <h1>author img</h1>
//             <photo/>
//             <photo/>
//             <photo/>//img will be ignored in this because function name start with small letter
//         </section>
//     )
// }


function Photo() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function UserImg() {
  return (
    <section>
      <h1>author img</h1>
      <Photo />
      <Photo />
      <Photo />
    </section>
  );
}
//what browser sees: 
//section is html tag html tag
// Photo start with capital(component)



// pract
function Profile(){
   return(
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
   );
}


export default function userdata(){
    return (
        <Profile/>
    )
}


//export(make file code available to use in another file)
//import(use the that available file(export file)code in current file )
//two way to export the file
//1. default way(we use this when we only want to export one file and in that file there is only one component)
//2. named export(we use this when we export more than one component from one file like button icon )
//ex:

// welcome page- we have only one component function WelCome(){...Icon.}..export default WelCome;
// IN APP.JSX(INPORT)- import Welcome from "./Welcome";

// export default function Playicon(){.......}
// export default function Playpaush(){.......}
//import {playicon,playpaush} from ./feature;



// pract:
//make a social media post with three component:
//1.postheader(img and name)
//2.post content(show the text)
//3.post action(like and comment button)
//4.social post(parent which combine all)

//component/PostHeader.jsx
export default function PostHeader({ img, name }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name} />
    </div>
  );
}

//component/PostContent.jsx
export default function PostContent({ text }) {
  return <p>{text}</p>;
}

//component/PostAction.jsx
export default function PostAction() {
  return (
    <>
      <button onClick={() => alert("liked")}>like</button>
      <button>comment</button>
    </>
  );
}

//component/SocialPost.jsx
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostAction from "./PostAction";

export default function SocialPost({ post }) {
  return (
    <div>
      <h1>Social Post</h1>

      <PostHeader name={post.name} img={post.img} />
      <PostContent text={post.text} />
      <PostAction />
    </div>
  );
}

//App.tsx
import SocialPost from "./component/SocialPost";

export default function App() {
  const posts = [
    {
      name: "Nova",
      img: "https://via.placeholder.com/100",
      text: "Learning React like a beast 🚀",
    },
    {
      name: "Alex",
      img: "https://via.placeholder.com/100",
      text: "Components finally make sense 😎",
    },
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <SocialPost key={index} post={post} />
      ))}
    </div>
     );
}