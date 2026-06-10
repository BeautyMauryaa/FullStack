const fs=require('fs');

console.log("start");

fs.readFile('realworld.js','utf-8',(err,data)=>{
    if(err) throw err;
    console.log("file read done");
    console.log("lines: ",data.split('\n').length);
});


//setTimeout
setTimeout(()=>{
    console.log("settimeout done");
},0);

Promise.resolve().then(()=>{
console.log("promise resolved");
});

console.log("script end");
//why readfile in last: because -this file goes to libuv and it read that file from os(which take some time) and then callback queue and I/O queue