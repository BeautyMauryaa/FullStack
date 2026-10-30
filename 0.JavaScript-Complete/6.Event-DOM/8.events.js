// JavaScript is single-threaded —
//  it has exactly one call stack, one
//   thread of execution. It cannot do
//    two things at the same time. Yet
//     it handles HTTP requests, timers,
//      and user clicks without freezing. How? The Event Loop.

//three layer in event loop:
//1.call stack(lifo-LAST IN FIRST OUT): main()greet()console.log();
//2.microtask queue: high priority
//3.macrotask queue: LOW Priority

//1.CALL STACK:
//how call stack work:
function greet(){
    console.log("welcome");
}
function main(){
    greet();
}

main();//how this work...first...main()..then greet()..then console
//but how js move  upward direction..console gree and main..



//task2.1: track manually:
function x(){
    y();
}

function y(){
    z();
}
function z(){
    console.log('hi')
}

x()

//task2: cause a stack overflow intentionally:
//Write a recursive function that calls itself with no base case. Run it, observe the error. Then fix it by adding a base case. This builds the reflex for recognising infinite recursion bugs.
//case1: infinte recursion:
// function loop(){
//     console.log("running..");
//     loop();
// }

// loop();//keep calling itself again and again
//in the last when stack become too large and js throw error: uncaught rangerror-maximum call stack size exceeded.

//in recursion we need two things: 1.base case(stoping condition)  2.recursive case(function calling itself)
//in this we only have recursive call..so js keep pushing function call into stack until memory limit

//fixing it with a base case:
function countdown(n){
    if(n==0){
        console.log("Done!");
        return;
    }

    console.log(n);
    countdown(n-1);
}

countdown(5);

//whenever use recursion:
//always ceck two things:
//1.when does it stop..2.is the problem getting smaller each cell?

// function overflow(n){
//     if(n>0)
//     return n;
// }

// overflow(5);

//2.MICROTASK QUEUE: Promises,async/await..(higher priority async )
//small async tasks that must run immediately after the stack becomes empty
console.log("A");
Promise.resolve().then(()=>{
    console.log("B");
})
console.log("C");

//A C B
console.log("1");

setTimeout(() => {
    console.log("2");

    Promise.resolve()
      .then(() => console.log("3"))
      .then(() => console.log("4"));

    setTimeout(() => console.log("5"), 0);

    console.log("6");
}, 0);//126345


//3.MACROSTACK QUEUE: SETTIMEOUT,SETINTERNVALS,EVENTS
//low priority async task: microtask are bigger tasks scheduled by apis;
//settimeout()
//setinterval()
//DOM events(child,scroll)
//some i/o callbacks


// console.log("1");
// setTimeout(()=>{
//     console.log("2");
// },0);
// console.log("3");


//golden rule of event loop runs:
//1. Run synchronous code in call stack
// 2. Empty the microtask queue
// 3. Run ONE macrotask
// 4. Repeat

// async function foo(){
//     console.log('B');
//     await Promise.resolve();
//     console.log('D');
// }

// console.log('A');
// foo();
// console.log('C');



console.log("A");
setTimeout(()=>console.log("B"),0);//macrotask
Promise.resolve().then(()=>console.log("C"));//microtask
console.log("D");//adcb


console.log("1");
setTimeout(()=>console.log("2"),0);
Promise.resolve().then(()=>{
    console.log("3");
    return Promise.resolve();
}).then(()=>console.log("4"));
console.log("5");//15342






async function test(){
    console.log("A");
    await Promise.resolve();
    console.log("B");
}
console.log("C");
test();
console.log("D");//cadb..await pause the function and resumes via microtask




console.log("1");
setTimeout(() => {
    console.log("2");
    Promise.resolve().then(()=>console.log("3"));
}, 0);

Promise.resolve().then(()=>console.log("4"));

console.log("5");
//15423


async function run(){
    console.log("A");
    setTimeout(()=>console.log("B"),0);
    await Promise.resolve();
    console.log("C");
}

run();
console.log("D");//ADCD


//why callstack then micro then macro why this order:
//-js is single threaded so it must finish all sync code before think about async code.
//-microtask designed for small follow-up operation that musthappen immeditaely after current code.
//-macrotask it shows the external event or delayed work...timer(setInterval,timeout,userclick network events or I/O);


//ques1: Fetch 3 URLs. First do it sequentially (one await after another). Then do it with Promise.all(). Log the time taken each way. You will see Promise.all is 3x faster. This is the single most used pattern in real fullstack apps.
//goal why promise.all() is faster.
async function sequentialFetch(){
    console.time("Sequential");
    const r1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const r2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const r3 = await fetch("https://jsonplaceholder.typicode.com/posts/3");

  await r1.json();
  await r2.json();
  await r3.json();
  
  console.log("Sequential");
}

sequentialFetch();//r1-wait r2-wait r3-wait..total 3sec


//nowuse promise.all():
async function parallelFetch() {
    console.time("Parallel");

    const urls=[
          "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
    ];

    const responses=await Promise.all(
        urls.map(url=>fetch(url))
    );

    await Promise.all(responses.map(r=>r.json()));
    console.timeEnd("Parallel");
}

parallelFetch();
//all run together...time will take 1sec





console.log("hello")
let btn=document.querySelector("#btn")
btn.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    console.log("btn was clicked");
    let a=25;
    a++;
    console.log(a);
}

 let div=document.querySelector("div")
// div.onmouseover=(evt)=>{
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log("congrates! you are inside the box now.");
//     let a=50;
//     console.log(`and now your weight is ${a}.`);
// }



//event listiners:-
div.addEventListener("mouseover",()=>{
    console.log("congrates! you are inside the box now.-handler1")
})


const handler2=() =>{
    console.log("congrates! you are inside the box now-handler2")
};

div.addEventListener("mouseover",handler2);


// div.addEventListener("mouseover",()=>{
//     console.log("congrates! you are inside the box now-handler3")
// })

const handler3=()=>{
    console.log("congrates! you are inside the box now-handler3")
};
div.removeEventListener("mouseover",handler3);

div.addEventListener("mouseover",(evt)=>{
    // console.log(evt)
    // console.log(evt.type);
    console.log("congrates! you are inside the box now-handler4")
})

div.removeEventListener("mouseover",handler2);



