//word vs key
//--word=meaning less in javascript
//--keyword which has some meanings in javascrit
// for ex: for,if,else,let,while,do ,chacha,bhayii,

//var const let


//variables and constant: 
//--those conatiner or like box which we use to store the data in code then this is called variables.
//--variabbles which value will be change or we can change later
//--constant is also like variables but constant doesn't change 


var1="dulha";
var2="dulhi";
console.log(`${var1} "weds" ${var2}`);
var1="ex";
console.log(`${var1} "weds" ${var2}`);


//ver const and let
//--let is also variables but the difference btw var and


//hoisting:
//--hoisting means we can use variable before declaring
//---variables and function are hoisted which means their declaration is moved on the top of the code.


//undefined and not defined
//--undefined means --something you have their existing is available but their exact value you don't know or you don't have
//not defined means--which does't exist (betuka baatee) 
//for ex:
// console.log(b); 

var a; //undefined
console.log(a);
a=12;



//types in js:
//---1.primitive
//---2.reference


//primitive:
//---which does real copy after doing copy is called permitive
//--


//refernec-any those value which does't real copy after doing copy but in that pass the referncemeans address of real value. which is called reference value
//--shortcut-reference have bracked ---{} () []
var c=[1,3,67,23];
var d=c;
c.pop();
console.log(c); //[1,3,67]

var f=56;//permitive type value (no bracket)
var g=f-2;
console.log(g);
console.log(f);


//(shortcut if value has not anye type of bracket this means permitive and if value has bracket then it is reference);


//conditional--if else if-else-if
//---in which come conditiona if this happen then it will do this if it does not happen then this will happen like this
//if(in this bracker only two things can be come true and false does't matter you wrting directly true or false you can in this way so that i can convert in true or false for ex 12<10--false 12>10-true like this  )


if(12>10){
    console.log("yess");
}else{
    console.log(false);
}

if(-1){
    console.log("true");
}else{
    console.log("false");
}

//if "if condition is nnot true or not satistfing with given data then else part will work "
//if else if=means we have more than one way for exam if this condion is not statisfying then this if condition will work if  if second if condion is also not statisfying then else will work 
// varj=alert(input(int("enter the value")));

// if(varj%2==0){
//     console.log("even");
// }else if(varrj%2!==0){
//     console.log("odd");
// }else{
//     console.log("invalid");
// }



//loops: for while
//repeation till given times or contition
//-1 1 1 1 1 1-repeation of number and print
// 1 2 3 4 5 6 -repeatition of  print only number are different

//when we use loop
//--repeation 
//for(start;end;change)

//0-10;
for(var i=0;i<10;i++){
    console.log(i);
}

for(var i=25;i<50;i++){
    console.log(i);
}

//while loop
//--when number of iteration doesnot known
// while(//write condition which true in future )
// var k=12;
// while(a<20){
//     console.log(k);
//      i++;
// }


//function:
//--block of code designed to perform a specfic task:
//--when you want to resuse your code multiple times
//--when you want to run your code with different data
function hello(){
    console.log("heleo deleulu");
}


hello();
hello();


for(var i=0;i<5;i++){
    hello();
}

//parameters and argument
// function hello(here which we write is called parameters){
//         -----
// }


//arguements
// hello(here we write argumrnts)
//arguments-are real value which we given when we running the function
//parameters--variables in which value is gonna store of arguments;


function abcd(a,b,c){
    console.log(a,b,c);
}
abcd(12,23,45);


//arrays:
//here we store multiples value of similar data types in contigous memory allocation
//---groups of similar type of value

var arr=[2,1,4,5,6];
//index=i-1;
for(var i=0;i<i-1;i++){
    console.log(arr[i]);//print index
}


//push pop shift unshift
//--add extra element in array we use push
//--remove lement from array --pop
//--add element at the first we use unshift
//--remove one element from first --unshift
//--remove element in btw the array -slice(starting poin,number of element you want to remove);


var arr1=[1,3,4,6,7,8];



//objects:
//--more than one element  storing is called array
//--store everything about only one element is called object(everyhting about only one);

//object--hold the details of one element
//blank object- var a={};



// let mode="light-mode";
// let color;
// if(mode=='dark-mode'){
//     console.log(color=="black");
// }else{
//     console.log(color=="white");
// }

// let mode='blue';
// let color;
// if(mode==='red'){
//     color:"white";
// }
// else{
//     color:"black";
// }

// console.log("hello")

// let n=3;
// if(n%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// let age=19;
// let result=age>18?"adult":"not adult";
// console.log(result);

// let num;
// prompt("enter a number: ");
// if(num%2==0){
//     console.log("even")
// }else{
//     console.log("odd");
// }

// let grades=prompt("enter your grades:");
// if(grades>=80&&grades<=100){
//     console.log("A")
// }
// else if(grades>=70&&grades<=79){
//     console.log("B")
// }
// else if(grades>=60&&grades<=69){
//     console.log("C")
// }
// else if(grades>=50&&grades<=59){
//     console.log("D")
// }else{
//     console.log("fail");
// }

// let employee={
//     name:"beauty",
//     age:23,
//     field:"enginner",
//     salarly:100000
// }
// for(let key in employee){
//     console.log("key=",key)
// }

// for(let a=0;a<=100;a++){
//     if(a%2==0){
//         console.log(a);
//     }else{
//         console.log();
//     }
// }

// let gamenumber=24;
// let usernum=prompt("Guess the gamenumber:");
// while(usernum!=gamenumber){
//     usernum=prompt("You Guess the Wrong number ! try again.")
// }console.log("cong! you have guess the wrong number, you Win this game");

// let str="beauty";
// console.log(str);
// console.log(typeof(str));
// console.log(str.length)
// console.log(str[3])


//template literals
// let product={
//     name:'agani',
//     price:20,
//     color:"red"
// }
// console.log(`the color of the ${product.name} pen is ${product.color}.`)

// console.log(`the addition of 1+2+3+4+5 is : ${1+2+3+4+5}`)


//escape chracter
// console.log("hii!\nMy name is beauty")
//console.log("hello\tthere!")

// let string="beauty";
// console.log(string)
// console.log(string.toUpperCase());
// console.log(string.toLocaleLowerCase())
 
// let str="i love you";
// console.log(str.charAt(2))

// let fullname=prompt("enter your full name without any space:");
// let username="@"+fullname+fullname.length;
// console.log(username);

// let student=prompt("enter the array element:")
// let size=5;
// for(let i=0;i<5;i++){
//     console.log(prompt(`enter the array elemntat${i+1} position`))
// }
// console.log(student);

//let marks=[22,34,56,78,90]
//console.log(marks)


//looping
// let marks=[22,34,56,78,90]
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// console.log(sum)
// let avg=sum/marks.length;
// console.log(avg)


// let marks=[22,34,56,78,90]
// let i=0
// for(let val of marks){
//     let offer=val/10;
//     marks[i]=marks[i]-offer;
//     console.log(marks[i])
//     i++;
// }

// let marks=[22,34,56,78,90]
// console.log(marks);
// let added=marks.push(100)
// console.log(marks)
// let deletemarks=marks.pop()
// console.log(marks)

// console.log(marks.toString())

//concat

let marks=[22,34,56,78,90];
let marks1=[20,32,53,74,91];
let concat=marks.concat(marks1);
console.log(concat)



