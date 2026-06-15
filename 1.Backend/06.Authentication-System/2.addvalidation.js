const mongoose=require("mongoose");
const userschemas=new mongoose.model(
    {
        name:{
            type:String,
            required: [true, "name is requires"],
            trim:true
        },
        email:{
            type:String,
            required:[true, "email is requires"],
            lowercase:true,
            trim:true,
            unique:true,
            match:[/^\S+@\S+\.\S+$/,"invalid email"]
        },
        role:{
           type:String,
           enum:["user", "admin"],
           required:[true, "require to select the role"],
           default:"user"
        },
        password:{
            type:String,
            required: [true, "pass is required"],
            minlength:8
        }
    },{timestamps:true}
)