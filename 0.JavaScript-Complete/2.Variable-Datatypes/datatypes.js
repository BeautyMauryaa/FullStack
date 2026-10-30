// console.log("we have two types of datatypes: 1.premitive 2.non-premitive")
// console.log("Premitive data types:")
// console.log("Seven data types that are premitive:");
// console.log("string is expectional means string can be both depends on use for example")
// let name="string"//string
// let str=new str("Beauty")//here string is working as a object.

// //number
// let num=21;

// //boolean(true/false)
// let isLoggedIn=true;

// //NULL(SPECIAL VALUE THAT REPRESENTS THE INTENTIONAL ABSENCE OF ANY OBJECT VALUE)
// //it is standalone type that has a single value NULL

// let data=null;


// //undefined
// //automatically assigned to variables that have been declared but not assigned a vallue

// let city; //value is undefined

// //symbol
// //a unique and immutable premitive value, often used as an identifier for object properties to avoid naming conflicts(es6)

// let id=symbol("uniqueId");

// //BigInt:
// //storingbig int value ....created by appdending n tothe end of an integer literal

// //type conversion:
// //js is dynamically typed langauge-means we don't need to specify the data type of variable when we declare it
// //data type can be converted later as per need even it is already declared


// //for example:
// let ans=43;
// ans="Thanks for the shrikhand!"

// let value=true;
// console.log(typeof value);
// let numStr="34";
// num=Number(numStr);//becomes a number 12
// console.log(Boolean(num))


// //boolean
// //used for logical opeartions and can hold one of only two values
// //true(1) and false(0)
// //essential for decision making and are often the results of comparision operations


// //js have 7 primitive and 1 object data type.
// // Type	Description
// // Number	A number representing a numeric value
// // Bigint	A number representing a large integer
// // String	A text of characters enclosed in quotes
// // Boolean	A data type representing true or false
// // Undefined	A variable with no assigned value
// // Null	A value representing object absence
// // Symbol	A unique primitive identifier
// // Object	A collection of key-value pairs of data



let x=16+"volvo";//16volvo
console.log(x);

let y="volvo"+16;//volvo16
console.log(y);

let z=16+4+"volvo"; //20volvo
console.log(z);

//js types are dynamic;
let q;//now q is undefined;
console.log(q);

q=5;//now q is number;
console.log(q);

q="noova";//now q is string
console.log(q)

//que:

let temp=32;
let condition="sunny";
let isSunny=true;
console.log(`It's currently ${temp} degrees and ${condition}. Is it sunny? ${isSunny}.`);

console.log(typeof(temp));
console.log("10"+5);//output will 105 and it is string because when we add something with string that convert in string.

let g=null;
console.log(typeof(g));//object

const book={
    title:"veronica decided to die",
    author:"paulocaulo",
    pages:550
}

console.log(book);
console.log(book.author);
console.log(book.pages);
console.log(book.title);


//array:
const arr=[black,white,gray];
console.log(arr);
console.log(arr[2])



