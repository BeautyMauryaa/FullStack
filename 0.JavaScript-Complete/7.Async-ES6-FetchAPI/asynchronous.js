//synchronous code: run line by line one after another:
//each line must finish before the nexy line starts
//if one line takes time everything after it wait..


//Asynchronous Code: JavaScript starts a task and does not wait for it to finish.
//Start this task. When it finishes, run this callback.

//js(single threaded)..without async ,one slow operation and freeze everything(API call,timer)...
//async function ....always return promises
//await only work inside async function(or top-level modules)




console.log("Start");

setTimeout(() => {
  console.log("Task finished");
}, 2000);

console.log("End");
//start end task finished
//js is single threader -async doesn't add threads it avoid blocking the thread.


//Callback function(the original async function): it is funciton that passed as an argument to another function.
//function executed after async task finishes
//it is function that runs later when a task completes.
//basic callback pattern:
function fetchUser(id,callback){
    setTimeout(()=>{
        const user={
            id,name:"rohan"
        };
        callback(null,user);
    },1000);
}

fetchUser(1,(err,user)=>{
    if(err) return console.error(err);
    console.log(user.name);
});

//callback hell:where nested callback function make the code difficult to read,maintain and debug(pyramid of doom)

getUser(userId, (err, user) => {
  if (err) return handle(err);
  getPosts(user.id, (err, posts) => {
    if (err) return handle(err);
    getComments(posts[0].id, (err, comments) => {
      if (err) return handle(err);
      // now deeply nested — hard to read, hard to debug
      render(user, posts, comments);
    });
  });
})
//(node js rules:first argument is always an error(null if none),secnd is the result..)

//promises:
//it solve callback problem:
//represent future completion of async operation
//pending(running)..fulfilled(success)..rejected(error)
//promise can only transition from pending->fullfilled or pending ->rejected.
//never back never both
//it is representing the eventual completion of failur of an async operation.
//three state: pending(operation running)....fulfilled(.then() runs)....rejected(.catch() runs)
//each.then(): return new promises


//Promise Static Method- all, all settled, race,any
//1.promise.all- run in parallel wait for all


const u=await fetchUser();
const p=await fetchPosts();
const o=await fetchOrders();

const [user,posts,orders]=await Promise.all([
  fetchUser(),fetchPosts(),fetchOrders()
]);

//all 3 runs simultaneously, reject if any fails


//2.Promise.allsettled: run all collect every output
//never reject waits for all,report each

const results=await Promise.allSettled([
  fetch('/api/user'),
  fetch('/api/broken'),//this one fails
  fetch('/api/posts'),
])

//results=[
  //   { status: 'fulfilled', value: Response },
//   { status: 'rejected', reason: Error },
//   { status: 'fulfilled', value: Response }
//]


results.forEach(r=>{
  if(r.status==='fulfilled') use(r.value);
  else log(r.reason);
})


//3.promise.race and promise.any:
//.race-fastest one wins....first promise should be settle(fulfill or reject)-reject immediately if first promise to settle is rejected

//.any-resolved with first fulfilled(ignore rejections)
//reject only if all reject


//async/await: sync looking async code
//async-declare async function: (return promises)
//await keyword pauses execution of the async function(not the whole thread) until the awaited promises settles, then resume with the resolved value


async function loadUser(id){
  try {
    const res=await fetch('/api/users/${id}');
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const data=await res.json();
    return data;
  }catch (err){
    console.error(err);
    throw err;
  }
}


//error handling:
//the 3 bugs that always happen:
//bug1: forgot await
//bug2: foreach ignore async
//bug3: use for..of
//bug4: unhandled rejection crashes node 15+



//Modern syntax: template literals, rest, spread,destructing
//template literals `bmdcbnms ${nn}`
//rest and spread operator:
//spread-expand an array/object into individual elements:
//rest: collect remaining elemets into an array:
const nums=[1,2,3];
const more=[...nums,4,5];
const copy={...user,role:"admin"};
Math.max(...nums);

function sum(...numbers){
  return numbers.reduce((a,b)=>a+b,0);
}

const [first,...rest]=[1,2,3,4];