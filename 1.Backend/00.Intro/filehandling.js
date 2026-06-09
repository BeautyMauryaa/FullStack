//do any type of operation on file(those operation which we can do on file )
//for ex: reading, writing, renaming, updating, deleting, copying and managing file

//fs module(built in module in node js):
const fs = require("fs") 

//or
// import fs from "fs";


//Types of file operation:
//mainly three we have:
//1. synchronous (wait until operation complete)
console.log("start") 
const data = fs.writeFileSync("./text.txt","hii this text file"); //this return something 
console.log("end")
//start data end


//2. writeFile(asynchronous task run the time taking task in background) and writeFileSync(synchronous task wwait until task completed)

console.log("start");
fs.readFile("text.txt","utf-8", (err,data)=>{//this doesn't return something can't write like this const data=fs.readFIlw..
   if(err){
    console.log(err);
   }else{
    console.log(data);
   }// always we have to give one return function
} );

console.log("end");
//start end data

//3. promise/async-await
async function readfile(){
const data=await fs.readFile("./text.txt","utf-8");
console.log(data);
}
readfile();