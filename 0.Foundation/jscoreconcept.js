//why js is soo improtant in wedev and workflow?
//we know html gives format/structure css gives styling/looks but js gives behaviour of both make html working
//browser can only understand js html css
//case-sensitive means a!=A

//its the only lang that runs natively in every web browser
//one lang which can handle both frontend and backend
// huge ecosystem- has millions of packages through npm

//provide rich interactivity and dynamic content for web applications

//1. let,Const Scope:
//can declare variable in 3 ways: var,let,Const
//let- value can change
//const- value can't change

const user = {
  name: "nova",
};
user.name = "Beauty";
console.log(user.name); //Beauty

//const lock the obj but doesn't lock the inside value

//scope: where we can access the variable
//1.Global scope: can access everywhere
let name = "Nova";
function show() {
  console.log(name);
}
show();

//2.Function scope: only can access inside the function
function test() {
  let age = 20;
}
console.log(age); //error undefined error
//let is a block scope

//Function: let us to Reuse the code
//syntax rules: can't use special words/keywords eg: function, can't start with num, can't use special char expect $ and _ , best practice use camelcase
//function call: functionname(); this help to run the code which is inside the function which we are calling
//fucntion scope: limits where a variable exists, anyvariable created btw {....} and only exits btw the{...}

//normal function:
function add(a, b) {
  return a + b;
}
console.log(add(3, 5));

//arrow function: better way to write function in js
const add = (a, b) => {
  return a + b;
};

//more shorter:
const add = (a, b) => a + b;

//ex:
const greet = (name) => `hello ${name}`;
console.log(greet("nova"));

//return statement:
//return: gives the result back making function reusable
// within a scope after return statement nothing else gets execute
//returning var is preferred to be a global variable

function findMax(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

let max = findMax(10, 25);
console.log("Max: ", max);

function Fahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function calcualteTax(param) {
  console.log(param * 0.1);
}

calcualteTax(1000);

function calculate(tax = 3) {
  console.log(tax * 2);
}
calculate();

//3.Object array destructuring
//object: collection of key value pair
const user = {
  name: "nova",
  age: 21,
};

console.log(user.name);

//array: collection of multiple element
const nums = [10, 56, 43];
console.loh(nums[1]);

//destructuring:
//instead of:
const name = user.name;
const age = user.age;

//use:
const { name, age } = user;

//arrray destructuring:
const arr = [10, 20];
const [a, b] = arr;
console.log(a);
console.log(b);

//map,filter,reduce: immutable array methods used to transform filter aggregate data without modifying the original array
// Map()= transform each aindividual item in an array:
//filter()= select items that pass conditional test
//reduce: combines all element into a single output value

const nums = [1, 2, 3];
const res = nums.map((n) => n * 2);
console.log(result);

const nums1 = [1, 2, 3, 4, 5];
const even = nums1.filter((n) => n % 2 === 0);
console.log(even);

const sum = nums1.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//Promise and async/await
//promise: placeholder that is not available yet, but will beresolved in the future
//pending fullfilled(.then()) rejected(.catch())

const promise = new Promise((resolve, reject) => {
  resolve("success");
});

promise.then((data) => {
  console.log(data);
});

//async await:newer or cleaner syntax introduced in ES2017 to handle promise
//async: it ensure function always return promise(put before fucntion declaration)
//await: put inside function before promise (it pause the execution of the function until thet promise settle (either resolve or reject))

function getData() {
  return Promise.resolve("Hello");
}

async function show() {
  const res = await getData();
  console.log(result);
}

show();

// realapi:
async function getUser() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

//try catch:
//without try and catch
JSON.parse("abc"); //program crash

//with:
try {
  JSON.parse("abc");
} catch (error) {
  console.log("Error");
}

try {
  const data = await fetch(url);
} catch (error) {
  console.log(error);
}
