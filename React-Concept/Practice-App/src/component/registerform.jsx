// import {useForm} from "react-hook-form";

// function Register(){
//     const{
//         register,
//         handleSubmit,
//         formState={errors,isSubmitting}
//     }=useForm();

//     const OnSubmit=(data)=>{
//       try{

//       }catch{

//       }
//     }

//     return(
//         <div>
//             <form OnSubmit={handleSubmit{onSubmit}}>
//                 <input type="text" />

//                 </form>
//             </div>
//     )
// }

import React from "react";
import { useForm } from "react-hook-form";
import API from "../api/axiosInstance"; // Aapka pichla interceptor logic

const RegistrationForm = () => {
  // 1. Destructure everything from useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // 2. The Final Submit Logic (Async API Call)
  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);
      // Sending data to real API using our Axios Instance
      const response = await API.post("/register", data);
      alert("Registration Successful!");
    } catch (error) {
      console.error("API Error:", error);
      alert("Server error: " + error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Join our AI Community</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* --- NAME FIELD (With Basic Validation) --- */}
        <div>
          <label>Full Name</label>
          <input
            {...register("fullName", { required: "Name is mandatory" })}
            placeholder="Beauty..."
          />
          {errors.fullName && (
            <p style={{ color: "red" }}>{errors.fullName.message}</p>
          )}
        </div>

        {/* --- EMAIL FIELD (With Regex Validation) --- */}
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        {/* --- PASSWORD FIELD (With Length Validation) --- */}
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password zaroori hai",
              minLength: {
                value: 6,
                message: "Kam se kam 6 characters toh likho!",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        {/* --- SUBMIT BUTTON (Handling Loading State) --- */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending Data..." : "Register Now"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
