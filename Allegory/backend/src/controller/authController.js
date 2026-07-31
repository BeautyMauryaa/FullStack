//step1: import user model
import User from "../models/user.js";
// import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//signup:
//step2: create controller
export const signup = async (req, res) => {
  //step3: try and catch
  try {
    // insated of only password hashed it
    
    //step4: get data
    const { name, email, password, role, isActive } = req.body;
   
    //step5: check existing user
    const existingUser = await User.findOne({
      email,
    });

    //step 6: if user already exist
    if (existingUser) {
      //step: return response
      return res.status(400).json({
        status: false,
        message: "user already exist",
      });
    }

 const hashedpass = await bcrypt.hash(password, 10);
    //step 8: create user if not exist
    const user = await User.create({
      name,
      email,
      password: hashedpass,
      role,
      isActive,
    }); //this will store in mongodb

    //step 9: return successfull msg
    return res.status(201).json({
      status: true,
      message: "user registered successfully",
      user,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const login= async (req,res)=>{
    try{
    //  step1: get emai and pass
    const {email,password}=req.body;
    //step 2: find the user
    const user=await User.findOne({
        email
    });

    //step3: if user not found
    if(!user){
        return res.status(400).json({
            status:false,
            message:"user not found"
        })
    }

    //step4: compare pass
    const isMatchPass= await bcrypt.compare(
        password,
        user.password
    );
console.log(process.env.JWT_SECRET);
    //json web token
    const token=jwt.sign({
   id:user._id,
   email:user.email,
   role:user.role,
    },
process.env.JWT_SECRET,
{
    expiresIn: "7d"
});

    //step5: if password doesn't match
    if(!isMatchPass){
        return res.status(400).json({
            status:false,
            message:"wrong password"
        })
    }


    //step 6: login successfully
    return res.status(200).json({
        status:true,
        message:"login successfully",
        token
    });

    }catch(err){
        return res.status(500).json({
            satus:false,
            message:err.message
        });
    }
}
