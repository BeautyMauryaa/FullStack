//scope is basically a context or environment where variable are declared or accessed.
//mainly we have three types of scope in js
//1.global scope:
//variable are access from anywhere in code..its something like public square..public things anyone can use and see.
//whether its inside conditional statemenet ,loops or other block of code.

//variable declared in this are typically declared outside of any function oe code block;
var globalvar="global variable"
function myFunction(){
    console.log(globalvar);//way to access global var , can acces from any part of code.
}
myFunction();




//2.local scope:
//when we declare a local variable it is only accessed or visible to that fucntion,code or conditonal statemen.
//like private room in building
//declared withing functions,conditional statment,loops or other code blocks.
//can't be directly accessed from outside it
function myfunction(){
    let localvar="i am local variable";//local var is in local scope,only acces within my fucntion.
    console.log(localvar);
}

myfunction();
console.log(localvar)//give error



function greet(){
    var greeting="hello world";
    console.log(greeting);//access the local var
}

greet();


//local shadowing:
//this is called when we declare variable of same name in local scope or higher scope

let mess="greeting!";
function myfunction(){
    let mess="greeting everyone!";//accessing the local
  //in this the local var mess is the shadow of global variable with the same name
    console.log(mess);
}

myfunction();
console.log(mess);//accessing the global var

//3.block scope:
//its like series of nested boxes within a larger container, each with its own set of variables.
//variable declared in block only accessible within the block in which thye are defined.

if (true){
    let blockVariable="block scope";
    console.log(blockVariable);
}

//accessing blockVaribale here would result in an error.


//diff btw block and local scope:
//local scope-within fucntion
//block scope-within code block like if for or while statement

function myfunction(){
    if(true){
        let localvar="i am local";
        var blockvar="i am block";
    }
    console.log(localvar);//accessible
    //console.log(blockvar);//error blockvar is not defined
}

//how to use block scope with let and const
//let and const
function exblockscope(){
    if(true){
        let blockVariable="I'm block scope with let";
        const constvar="I'm block scoped with const";
    }
    //console.log(blockVariable);//give error not accessiable
    //console.log(constvar);//gives error
}

//blocked scope in conditional and loop
result="global scope"
function checkcondition(){
    let result="before condition";//local scope
    if(true){
        let result="inside condition"//block scope
    }
    console.log(result)//print local scope
}


//scope chain:
//