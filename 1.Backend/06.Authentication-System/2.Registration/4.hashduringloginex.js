//user enter=test123
//db contain =$2b$10$abc...
//we can not do password===hash
//because test123!=$2b$10$abc...


//instead we can do: 
// const isMatch=
// await bcrypt.compare(
//     enteredpassword,//test123
//     user.password,//$2b$10$abc...
// )

//note: instead of do hash method in control always try to do in schema file.
//ex: 
const bcrypt=require("bcrypt");
const mongoose=require("mongoose");
const userSchema = new mongoose.schema(
  {
    name: {
      type: String,
      required: true,
      trim: true //remove extra space 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: Number,
      required: true,
      minlength:10,
      maxlength:12
    },
    password: {
      type: String,
      required: true,
      select:false // Password hidden automatically in response 
    },
    role: {
      type: String,
      enum: ["user", "admin"], //enums means only allowed value
      required: true
    },
    avatar: {
      type: String,
      default: " "
    },
  },
  { timestamps: true }, //mongo db automatically creates createdAt and updateAt 
);


//pre-save hook:
userschema.pre("save",async function(next){
 if(!this.isModified("password")){
  return next();
 }
 this.password=await bcrypt.hash(
  this.password,
  10
 );
 next();
})


//compare method:
userschema.method.comparepassword(
 async function(enteredpassword){
  return await bcrypt.compare(
    enteredpassword,
    this.password
  );
 });

module.exports=mongoose.model("user",userschema)
