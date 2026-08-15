//RHF- React hook form it is lib which is used to handle form in react

//step1: install rhf
// npm install react-hook-form

//step 2: basic hook
import {useForm} from "react-hook-form";

// function Login(){
// const {
//     register,//connect to the input
//     handleSubmit,//form submit control
//     formState:{errors}//handle validation errors
// }= useForm();
//  const OnSubmit=(data)=>{
//     console.log(data);
//  };

//  return(
//     <div>
//         <form OnSubmit={handleSubmit(OnSubmit)}>
//             <input type="email" placeholder="email" {...register("email")}/>
//         </form> 
//     </div>
//  )
// }

 
import axios from 'axios';
function Login(){
    const{
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();
    const OnSubmit=async (data)=>{
        try{
 const res=await axios.popst("https://jsonplaceholder.typicode.com/posts",data);
alert("login succesfull");
        }catch{
            alert("login failed");
        }
    };


    return(
       <form OnSubmit={handleSubmit(OnSubmit)}>
        <input placeholder="email" {...register("email",{required:"email"})}/>
        {errors.email&&<p>{errors.email.massage}</p>}

        <input type="password" placeholder="write pass" {...register("password",{required:"password", minlength:{
            value:6,
            massage:"min length 6"
        }})}/>

        {errors.password && <p>{errors.password.message}</p>}

        <button type="Submit">Submit</button>
       </form>
    );
}

export default Login();


// Build Signup Form:

// Fields:

// name
// email
// password
// confirm password

// Add:

// required
// password match validation
// API call
// success message
// reset form