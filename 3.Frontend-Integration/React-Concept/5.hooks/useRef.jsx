//its like memory box of react where we store value without doing any changes on ui
//temp storage 
//simple way: 
// for ex we are filling the login form
// step1: user filling their detail like (name,email etc)
// - so these data store in frontend(useref)-but still doesn't do any changes in ui (temporary store box till backend get the data and verify it )
// step2: after completing the form user click the submit button
// - now the user data go to the backend(where store permanently)
// step3: after receving the data backend verify the data based on given logic and then send back to ui and update tthe ui based on data for example..welcome beauty


//(re-render!=reset)-re-render means react run that function again
//notes: as this is temp: so it will store value till npm run dev runnig...when npm run dev stop all data will be remove if youhaven't click submit button

// const ref= userRef(initialvalue);

// {
//     current:initialvalue;
// }

import {useRef} from "react";

export default function App(){
    const CountRef=useRef(0);
    function  Increment(){
        CountRef.current++;
        console.log(CountRef.current)
    };

    return(
        <button OnClick={increment}>Clickt</button>
    )
}

//why ui doesn't change:
//useRef ka .current change hota hai, lekin React us 
// change ko track nahi karta isliye re-render trigger nahi hota(react track only state changes)


//useState use karte hain jab UI update karna ho
// useRef use karte hain jab value store karni ho bina re-render trigger kiye