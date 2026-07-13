import { useState } from "react";

// form handling: reading user input, validating input, updating states, submitting data to backend
const [form ,setForm] = useState({
    name:"",
    email:"",
    phone:""
})


//input handle changes:
function handlechanges(e){
    setForm([
        ...form,
        [e.target.name]:e.target.value,
    ]);
}


<input name="email" value={form.email} onChange={handlechanges} />
//using the name attribute let one handler update multiple field



//handle form submit:
function handleSubmit(e){
    e.PreventDefault();
    console.log(form);
}
//e.PreventDefault prevent the browser from refreshing the page when submit

<form onSubmit={handleSubmit} >

</form>



//basic validation: before sending data
if(!form.email){
    alert("email is required");
    return;
}



//common validation:
//1. required: 
if(!form.name){}
//2. email:
if(!form.email.includeS("@")){}
//3. PASSword length
if(!form.password.length<6){}
//4.confirm password
if(form.password!==confirmPassword){}


//error state: 
const[error, seterror]=useState({});
seterror({
   emial:"invalid email"
})
//show error
{/* <p>{seterror}</p> */}




//5. sumit to backend
await axios.post("/register",form)

//validation lib: zod,yup


 //complete workflow:
// User types
//       ↓
// useState updates values
//       ↓
// Click Submit
//       ↓
// preventDefault()
//       ↓
// Validate inputs
//       ↓
// If valid
//       ↓
// Send API request
//       ↓
// Success / Error message