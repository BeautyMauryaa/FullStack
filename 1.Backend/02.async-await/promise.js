console.log("Start");//1

setTimeout(()=>{
    console.log("settimeout")//4
},0);

Promise.resolve().then(()=>{
    console.log("promise");//3
}).then(()=>{
    console.log("promise 2");//3
});

console.log("end");//2