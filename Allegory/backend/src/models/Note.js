import mongoose from "mongoose";
const notesSchema = new.mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        content:{
            type:String,
            required:true
        },
        author:{
            type:mongoose.Schema.Types.ObjectId, // reference link to another document 
            ref:"User",
            required:true
        }
    },
    {
        timestamps:true
    }
);
const Note=mongoose.model("Note",notesSchema);
export default Notes;