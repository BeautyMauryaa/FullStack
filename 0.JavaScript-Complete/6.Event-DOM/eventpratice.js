let modebtn=document.querySelector("#btn");
let body=document.querySelector("body");
let currmode="light";

modebtn.addEventListener("click",()=>{
   if(currmode==="light"){
    currmode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
   }
   else{
    currmode="light";
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currmode);
});

let div=document.querySelector("div");
let body1=document.querySelector("body");
let modechange="grey";
div.addEventListener("mouseover",()=>{
    if(modechange===grey){
        modechange="yellow";
        body1.classList.add("grey");
        body1.classList.remove("yellow");
    }
    else{
        modechange="yellow";
        body1.classList.add("yellow")
        body1.classList.remove("grey");
    }
    console.log(modechange);
})