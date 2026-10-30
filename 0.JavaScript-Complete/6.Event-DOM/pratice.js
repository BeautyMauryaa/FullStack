let h2=document.querySelector("h2")

console.dir(h2.innerText)
h2.innerText=h2.innerText+" from apna collage student"



let newbtn=document.createElement("button");
newbtn.innerText="click me!";
console.log(newbtn);
newbtn.style.color="white";
newbtn.style.backgroundColor="red";
document.querySelector("body").prepend(newbtn);

//question 2
 let para=document.querySelector("p");
 let attr=para.getAttribute("class");
// let changename=para.setAttribute("class","newclass")



//attributes

// //get attributes
// let div=document.querySelector("div")
// console.log(div.getAttribute("id"));

// //setattributes
// let para=document.querySelector("p")
// console.log(para.setAttribute("class","newclass"));
// console.log(para.getAttribute("class"))

//style
// let  div=document.querySelector("div");
// console.log(div.style);
// div.style.backgroundColor="green";
// div.style.fontSize="26px";
// div.style.border="2px solid red";
// div.innerText="hello";

let newbtn=document.createElement("button");
newbtn.innerText="click me";
console.log(newbtn);

let div=document.querySelector("div");
div.append(newbtn)


//let para=document.querySelector("p");
para.remove();

newBtn.remove();


//let div=document.querySelectorAll(".box")
let idx=0;
for(div of div){
    div.innerText=`new unique value is ${idx}`;
    idx++;
}
let divs=document.querySelectorAll(".box");
console.log(divs)

console.log("hello")
window.console.log("hello")
console.log(window)
console.log(window.document)
console.dir(window.document)

//selecting with id
let heading=document.getElementById("heading");
console.dir(heading);


//selecting with class
let class1=document.getElementsByClassName("class1");
console.dir(class1);


//selecting with tag
//let para=document.getElementsByTagName("p")
console.dir(para);


//query selector
//1.queryselector
let element=document.querySelector("p");
console.dir(element);

//2.queryselectorall
let element1=document.querySelectorAll("p");
console.dir(element1);

let element3=document.querySelectorAll(".class1");
console.dir(element3);

console.dir(document.body.firstChild);




//innertext
//let div=document.querySelector("div")
console.dir(div);

let heading1=document.querySelector("h1")
console.dir(heading1);

