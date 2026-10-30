// //  console.log("variables in js act as named container for storing data vales. essential for holding information that can be accessed and modified later in a PerformanceNavigationTiming. declared using let.const and var");
// //  console.log("we mostle use let and const introduced in ES6(2015) over the older var keyboard due to better scoping rules.")
name="beauty";
price=99.99;
age=21;
console.log(name);
console.log(price);
console.log(age);
x=null;
console.log(x);
y=undefined;
console.log(y);
isfollow=false;
console.log(isfollow);
Name="Beauty";
console.log(Name);
Console="apna collage";
console.log(Console);
TotalPrice=240.80;
console.log(TotalPrice);
let fullname="duggu";
fullname="rani";
fullname="vikash"
console.log(fullname);
const year=2023;
console.log(year);
let g;
console.log(g);
{
    let f=5;
    f=7;
    console.log(f);
}
let roll=45;
let number="three";
isfollow=true;
let s=null;
let K=BigInt("123");

const student={
    fullName:"Beauty Rani",
    Age:19,
    cgpa:9,
    ispass:true
};
console.log(student.Age);
console.log(student.cgpa);
student.Age=student.Age+1;
console.log(student.Age);

//pratice question one:
const Product={
    title:"Ball Pen",
    rating:4,
    price:250,
    offer:5
};
console.log(Product);

const Profile={
    profilename:"@beauty__maurya",
    isfollow:true,
    Message:"hii",
    post:195,
    followers:56900,
    following:4,
    detail:"beauticottage|ex-micrsoft,lovely professional university|bca graduates."
};
console.log(Profile);
console.log(Profile["isfollow"]);
console.log(Product["rating"]);

// //  //let//
// //  console.log("block scoped,can be reassigned a new value later, preferred way to declare a variable whose value might change.")
// //  let count=1;
// //  count=2//value can be updated


// //  //const
// //  console.log("block scoped,read only,initializer is required when declaring a const variable.")
// //  const pi=3.14;
// // //  pi=3.14//cause and error


// // //var//
// // //var was the original way to declare variable in js before es6 and it has some unique behavior and querks.
// // //function scope=their scope is limited to the function in which they ware created.
// // //hoisted= they are moved to the top of their containing function or global scope during the compilation phase, their assignments remain in place.

// // function varEXample(){
// //     if(true){
// //         var x=14;
// //     }
// //  console.log(x);
// // }

// // console.log(x)//undefined (hoisted but not initialized)

// // //let
// // //let was introduced in ECMAScript 2015(ES6) and offer block-level scoping
// // //variables declared with let are not hoisted to the top of their scope and they only accessible within the block they are defined in.

// // function letExample(){
// //     if(true){
// //         let y=20;
// //     }
// //     console.log(y);//reference error
// // }


// // //const
// // //also introduced in ES6 and has similar block-level scoping as let.
// // //cannot reassigned ,must be initialized upon declaration.

// // function constExample(){
// //     const z=30;
// //     console.log(z);
// // }


// //practical:

// function variableExamples(){
//     //using let for reassignable variables
//     let counter=0;
//     counter=1;
//     console.log(counter); //1

//     //using const for constants
//     const pi=3.14159;

//     //pi=3.14 //error: assignment to const varaibles
//     console.log(pi);

//     //using var (not recommended)
//     if(true){
//         var age=25;
//     }
//     console.log(age); //25(function-scoped)
// }

// variableExamples();

// //console.log(counter); //referenceError: counter is not defined
// //console.log(pi); //reference: pi is not defined
// //console.log(age); //25 (still accessible, not block-scoped)

// //notes:- always start with const if needed then later change into let.



//global scope: access from anywhere in the program.
//ex: outside of all fucntion and block
//js ekywords: var,let,const

//function scope: only within the function
//ex:inside the fucntion body
//ex: var,let,const

//block scoped: only within the specific block
//ex:inside the {} of loops or if statement 
//ex: let const

//question: why let/const are coming into global and in fucntion also.
//-both are blocked scoped(limited to {}) but if it declared outside any fucntion or block they become global


//whatis TDZ(Temporal Dead Zone):

document.writes("it is used to store data in program which we used later")
document.write("think of its as a containerthat holds a vallue.")
let a=21;
// a=variablename
// 21=stored value

//why varaible is used:
document.writes("variables allow us to store and reuse data.")
let name="Noova"
console.log(name)
console.log("it is case senstivive")



//types of variables in javascript:
console.log("var-old method,function/global scope 2.let=block scope,es6 released 3.const=const value")


//letvaraibale:
console.log("allow value to be changed")
console.log("let can be re-declared")
let age=20;
age=21;
console.log(age)


//const varaible:
console.log("means the value cannot change.")
const country="india";
console.log("country");


//var varaibles:
console.log("can be redeclared")
console.log("it is outdated andhas scope problems")
console.log("moderns js uses let and const")
//suggestion:
console.log("always prefer to use const and if needed later change then convert it to let.")


//variables naming
console.log("rules: cannot start with numbers,no space allowed,use meaningful names.")


// //var
// // var number =20;
// // var update=console.log(number-1);
// // number=update;
// // console.log(number);//the output will be undefined because console.log return nothing its only print 
// //so the workflow of this code will be: console.log() print 20-1=19 and then update will be assign to undefined when we ass
// //ign number=update means number=undefined
// //then console.log() print undefined..so output will be 19 undefined.

// //correct code will be
// var number=20;
// console.log(number-1);
// var update=number-1;
// number=update;
// console.log(update)



// // var num=10;
// // console.log(++num);
// // var upd=++num;
// // num=upd;
// // console.log(upd);

// //++num and num+1=both are diff...num++ is a desctructive..it changes the value of the variable immediatly where it stands
// //and num+1 only calculate value must use = to save the changes back to the varaible.
// var num=10;
// console.log(num+1);
// var upd=num+1;
// num=upd;
// console.log(upd);


// var a=3;
// var b=1;
// var sum=a+b;
// sum=sum+b;
// console.log(sum);


// var text="NumeroTres";
// console.log(text.length);//9

// var word="Programming";
// console.log(word[2]);
// console.log(word[1]);


// //replace
// // var word="Ocygen";
// // word[1]='x';//wrong way nothing will change;
// // var newWord=word;
// // console.log(newWord);

// var word="Ocygen";
// var newWord=word.replace('c','x');
// console.log(newWord);


// //string slicing
// var str="String";
// var stringsliced=str.slice(2,6);
// console.log(stringsliced);

// //1.user profile display://avoid var
// // var firstname="Beauty";
// // var lastname="Maurya";
// // var age=21;
// // console.log(`Hello, my name is ${firstname} ${lastname} and i am ${age} years old.`);


// //let
// let firstname="Beauty";
// let lastname="Maurya";
// let age=21;
// console.log(`Hello, my name is ${firstname} ${lastname} and i am ${age} years old.`);


// //simple calculator:
// let length=10;
// let width=20;
// let area=length*width;
// console.log(area);

// //swapping values:
// let a=5;
// let b=6;
// let temp=a;
// b=temp;
// a=b;



// //interesting fact about varaible
// if(true){
//     var x=6;
//     let y=5;
// }
// console.log(x);//6
// console.log(y);//error because y is blocked scoped

// if(true){
//     let y=20;
//     const z=30;
// }
// console.log(y,z);//reference error



// var x=10;
// var x=20;//allowed to reassigned

// let m=30;
// //let m=40;//not allowed 

// const z=50;
// //const z=60;//syntax error



// //we can change the element of array or object even if declare as const
// const ob={a:3};
// ob.a=6;//allowed

// const arr=[10,20,30];
// arr[2]=40;
// console.log(arr)//allowed

/*typeerror in the below lines
obj={b:30};
arr=[50,100]*/

const birthyear=2005;
const futureyaer=2026;
let age1=futureyaer-birthyear;
let age2=age1-1;

console.log(`i will be either ${age1} or ${age2}.`);

//lifetime supply calculator:
const crntage=21;
const maxage=24;
const snaks=2;

const remainingyear=maxage-crntage;
const daysinyears=365.25;
const totalsnaks=remainingyear*daysinyears*snaks;
console.log(`you will need ${totalsnaks.toFixed(0)} snaks to last you until the ripe old age of ${maxage}. `);

//variable swapping
//let a=10;
let b=20;
let temp;

temp=a;
a=b;
b=temp;
console.log(`after swap ${a} and ${b} is a and b `);