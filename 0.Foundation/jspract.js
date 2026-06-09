//let const
let a = 10;
if (true) {
  let a = 20;
}

console.log(a);
//10

// const city="Delhi";
// city="Mumbai";
// console.log(city);//type error

let x = 5;
{
  let x = 10;
}

console.log(x);

//Function:
const square = (n) => n * n;
console.log(square(4));



function findMax(a,b){
    if(a>b){
        return a;
    }
    return b;
}

let max=findMax(10,25);
console.log("Max: ",max);

function Fahrenheit(celsius){
    return (celsius * 9/5) + 32;
}



const prompt = require('prompt-sync')();
let num1 = 9;
let num2 = 6;
const chosenOperator = prompt("Enter the operator (+, -, *, /):");

function calculator(a, b, op) {
  if (op === "+") {
    console.log("Add:", a + b);
  } else if (op === "-") {
    console.log("Subtract:", a - b);
  } else if (op === "*") {
    console.log("Multiply:", a * b);
  } else if (op === "/") {
    if (b === 0) {
      console.log("Cannot divide by zero");
    } else {
      console.log("Divide:", a / b);
    }
  } else {
    console.log("Invalid operator");
  }
}
calculator(num1, num2, chosenOperator);


//array object destructuring:

const user={
    name:'nova',
    age:21
};

const {name}=user;
console.log(name);


const nums=[5,10];
const[x,y]=nums;
console.log(y);


//map filterreduce:
const nums1=[1,2,3];
const result=nums1.map(n=>n+1);
console.log(result);

const nums2=[2,3,4,5];
const result=nums2.filter(n=>n>3);
console.log(result)


const nums3=[10,20,30];
const sum=nums3.reduce(
    (acc,curr)=>acc+curr,
    0
);

console.log(sum);