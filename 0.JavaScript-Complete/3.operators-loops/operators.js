//1.Arithmetic operators
//let a=6;
//let b=3;
// a,"& b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);


//modulus operator:
console.log("a%b:",a%b);


//exponentiation:
console.log("a**b:",a**b);//6^3=216


//unary operatrs:
a++;
console.log(a);//6=7
b--;
console.log(b);//3=2


//Asignment operator:
console.log(a+=b);//7+2=9
let c=3;
console.log(b-=c);//2-3=-1
let d=4;
let e=4;
console.log(d*=e);//4*4=16
let f=5;
f*4;
console.log("f=",f);

//comparison operator:
let i=4;
let h=6;
console.log("i==h",i==h);

let j=5;//number
let k="5";//string -> number
console.log("j==k:",j==k);//true

//logical operator:
let l=4;
let m=4;
l==m;
console.log(!l==m);

//conditonal statements:
//1.if:
let mood="dark mood";
if(mood==="dark mood"){
    console.log(color="black");
}

if(mood!="dark mood"){
    console.log(color="white");
}


//if-else:
let boy=13;
if(boy===13){
    console.log("true counting");
}
else{
    console.log("re-counting");
}

//Ternary operator:
//let age=19;
let result=age>18?"adult":"not adult"; //simpler,compact if else
console.log(result);



//for loop
for(let i=1;i<=100;i++){
    console.log("Beauty");
}

//let sum=0;
for(let j=1;j<=50;j++){
    sum=sum+j;
    console.log(sum);
}


//while loop
let z=1;
while(z<=5){
    console.log("beauty");
    z++;
}


//do whileloop
let shyam=1;
do{
    console.log("hello from the beauticottage!");
    shyam++;
}while(shyam<=5);

//for of loop
let str="beauty";
let size=0;
for(let val of str ){
    console.log("val=",val);
    size++;
}
console.log("string size:",size);

//for in loop

let employee={
    emp_name:"rahul",
    age:32,
    fiel:"accountent",
    salarly:100000
};
console.log(employee);
console.log(employee["salarly"]);
for(let key in employee){
    console.log("key=",key,"value=",employee[key]);
}


//string
let string ="beauty maurya";
let string2='beautyrani';
//string indices
console.log(string[9]);


//template literals
let specialstring=`this is a template literal `;
console.log(specialstring);



let product={
    item:"pen",
    color:"red",
    price:10
};
//console.log("The price of", product.item,"which is",product.color,"in color is",product.price);
console.log(`The price of ${product.item} which is ${product.color} in color is ${product.price}.`); 


console.log("hello!\nits\tme.");

//string methode
let newspacialstring=specialstring.toUpperCase();
console.log(newspacialstring);

let str1="world";
let str2="hello!";
let newstr2=str2.slice(1,5);
//let res=str2.concat(str1);
console.log(res);
console.log(newstr2);

let replacestr1=str1.replace("world","duniya");
console.log(replacestr1)

console.log(str1.charAt(4));


//arithimatic operator:
const sum=5+3;
const diff=10-2;
const p=4*3;
const q=5/2;
console.log(sum,diff,p,q);

//assignment 
let n=10;
n+=4;
n*=4;
console.log(n);


//comparision : its gives value intrue or false:
console.log(10>5);
console.log(10==="10");

//logical operator:
const a=true,b=false;
console.log(a&&b);//Logical AND
console.log(a||b);//logical or


// bitwise operator(&,|,^,~)
//const res=5 &1;
//console.log(res);

//ternary operator: shorthand for condition statement it take three operands.
const age=18;
const statue=age>=18?"Adult":"MInor";
//conditon?expression1:expression2 evaluates expression1 if the condition is true, otherwise evaluates expression 2.


//comma operator:
//evaluates its operands from left to right sequentially and return the value of the rightmost operands.
let n1,n2
const res=(n1=1,n2=2,n1+n2);//output 3
console.log(res);

//unary operator:
let x=5;
console.log(++x);//pre-increment
console.log(x--);//post-decrement 
console.log(x);


//relational operator:
//compare its operands and determine the relationship btw them
//return boolean vaue(true or false)
const obj={length:10};
console.log("length" in obj);//in check property exist
console.log([] instanceof Array);//check if an object is an instance of constructor

//js bigint operator
//this operator allows calcullation with number beyound the safe integers range.
const big1 = 123456789012345678901234567890n;
const big2 = 987654321098765432109876543210n;
console.log(big1 + big2);//n=suffix to donate BIgint literals

//string operator:

const s="hello"+" "+"world";
console.log(s);


//chaining operator:
//allow safe acces 
const obj1={name:"Beauty",address:{city:"delhi"}};
console.log(obj1.address?.city);
console.log(obj1.contact?.phone);




// console.log("two things in this 1.opeartor: It is a symbol or keyword that tells the engine to perform a specific action on one or more values(operands)...2.operands: the value on that the operation will perform or operator perform is called operands! ")
// console.log("we have 11 type of operator totallly in javascripe.")
// console.log("1.Assignment Operator:")
// console.group("in this we assign value toits left operand on the value of its right operands.")

// let totalcost=50;
// totalcost+=totalcost*0.1;
// totalcost-=5;
// console.log("the final cost is : " +totalcost.toFixed(2));
// const obj={};
// obj.x=3;
// console.log(obj.x);
// console.log(obj);
// const key="y";
// obj[key]=5;
// console.log(obj[key]);
// console.log(obj);



// //variable assignment and swapping
// let a=20;
// let b=10;
// console.log("before swap: a=",a,",b=",b);
// let temp=a;
// a=b;
// b=temp;
// console.log("after swap: a=",a,",b=",b);

// //compound assignment operator:
// //Start with a variable total having an initial value of 50. Use compound assignment operators to perform the following sequence of operations:
// // Add 25 to total using +=.
// // Multiply the result by 2 using *=.
// // Subtract 10 from the new total using -=.
// // Divide the final result by 4 using /=.
// // Print the value after each operation. 


// total=50;
// console.log("intial total is: ",total)

// //add 25
// total+=25;
// console.log("after addition: ",total)

// //multiply the result by 2 using *=
// total*=2;
// console.log("after multiplication: ",total)

// //subtract 10
// total-=10;
// console.log("after substraction: ",total);

// //devide
// total/=4;
// console.log("after devision: ",total)

// //logical assignment operator: shorthand for conditional variable assignment by combining logical operator(&&,??,||) with assignment operator(=)
// //baiscally: we use this when we want to do conditon check and assignment in one line.
// //whenever the js check condition it convert the value in the form of true or false which is called truthy and falsy and only 6 value are falsy.
// // falsy value: false,0,"",undefined,NULL,NAN

// //x&&=y: if x value(left value is truthy) the it will be assign to the left value


// let x=10;//truthy
// x&&=5;
// console.log(x);
// //print 5 because x is truthy(not any value from falsy)
// //using logical operator assignment operator(&&=,||=,??=)
// // Demonstrate the practical use of the logical assignment operators:
// // Use &&= to assign a default value to a variable if it's truthy (less common, usually ||= is used for defaults).
// // Use ||= to assign a default value to a variable if it's falsy or null/undefined.
// // Use ??= to assign a default value to a variable only if it is null or undefined. 

// let userrole="developer";
// let defaultrole="viewer";
//  userrole &&= defaultrole;
//  console.log("user role after &&=: ",userrole);

//  userrole||=defaultrole;
//  console.log("userrole after ||=: ",userrole);

// let settings=null;
//  userrole ??=defaultrole;
// console.log("after NUllish assignment operator: ",userrole);
//  settings??=userrole;
//  console.log(settings);

//  //is left value is NULL OR Undefined then it will print right value but is left value is not null or undefined the it i will print own value;
//  let y=null;
//  y??=10;//10 will be assign
//  console.log(y);

//  assign="value";
//  assign??=3;//3 will not assign because assign !=null or undefined.
//  console.log(assign)



//  //BItwise assignment operator:
//  //perform bitwise opeartion + assignment operation in one line.
//  //and (&=)
//  //or(||=)
//  //not(!=)
//  //firstly it convert value into bit and the perform operation




//  //2.Comparision operators:
//  //-used in programming to compare two values or expression an dreturning value of true or false.
//  const var1=3;
//  const var2=4;
// //1.equal to(==)
// //2.not equal to(!=)
// //3.strict equal to(===)
// //4.strict not equal to(!==)
// //5.greater than(>)
// //6.greater than or equak (>=)
// //7.less than(<)
// //8.less than or equal to(<=)

// //arthimatic operator:
// //perform mathematical operation on numerical value.
// //additon(add two operands,also used in string concatenation)
// let sum=5+2; //result: 7

// //substraction: subtract the right operands from left operands 
// let sub=10-4; //result:6

// //multiplication: multiplies two operands.
// let product=6*4; //result:24

// //divison: divides the ;eft operands by the right operands.
// let quotient=20/4; //result:5

// //modules: returns the remainder of division operation.
// let remainder=17%5;  //result:2;

// //exponentiation: power 
// let power=4**3; //result:64;

// //increment: increase the value by one;
// let u=5; u++;//6
// //decrement: decreases the value of a variable by one.
// let w=5; w--;//4

// //prefix:(++x)=return the value after increment/decrement
// //postfix(x++)=return the value before the operation
// let res=4+3*2**2/4-1;


// console.log("10"+5);//105
// console.log("10"-1);//9
// console.log("10"/5);//2
// console.log("10"-"2")//8
// console.log("name"-"name");//nan


// //Bitwise operator: 
// //treats their operands as a set of 32 bits(0,1);
// //num 9=1001;
// //perform operation on such biary represenation but they return standard js numerical values;

