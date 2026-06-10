console.log("start");
//macrotask(less priority)
setTimeout(function(){
    console.log("hello")
},1000);

setTimeout(function(){
    console.log("hii")
},0);

console.log("end");
//start
//hii
//hello
//end