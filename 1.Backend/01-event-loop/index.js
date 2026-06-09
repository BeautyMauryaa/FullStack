// nodes js single threaded(runs only one task at a time)
// but handle many task because of event loop and callback queue

//it keeps main thread free by sending long running task to the background and executing their callback only when its done and callstack is empty.

//event loop follow FIFO ORDER(first in first out) and int is non blocking
//event loop execute the code in priority order:
//1.call stack(higher priority)
//2. microtask queue(middle priority)-promises
//3. macrotask queue(lower priority)-setTimeout,setInterval


//synchronous code: 
console.log("start");
for(let i=0;i<=1000000000;i++){};
console.log("emd");



//asynchronous code:
console.log("start");
setTimeout(()=>{
    console.log("TIMEOUT");
},2000);
console.log("end");

// start end timeout
// setimeout is macrotask so it will excute after the call stack is empty and 2 second has passed.

//promise ex:

console.log("hey");
setTimeout(()=>{
    console.log("timeout");
},2000);


Promise.resolve().then(()=>{
    console.log("promise")
})

console.log("end");



//hey,end, promise(microtask),timeout(macrotask less priority than microtask)


//NOtes:
//1. CallStack(LIFO LAST IN FIRST OUT)
//2. WebAPi/ node apis (long task (gives task to the system runs in background))
//3. Callback queue (completed task wait here)


const fs=require("fs");
console.log("start");
fs.readFile("data.txt", "utf8" ,(err,res)=>{
    console.log(data);
});

console.log("end");



//start end data 
//fs.readfile asynchronous task so nod send file reading to os/thread


