let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")


const userscorePara = document.querySelector("#user-score");
const compscorePara =document.querySelector("comp-score");


const gencompchoice = (compchoice) =>{
  const options=["rock","paper","scissor"]
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
};


const drawgame =() =>{
    msg.innerText ="game was Draw. play Again!";
    msg.computedStyleMap.background ="#081b31";
}


const showWinner = (userwin,userchoice,compchoice)=>{
   if(userwin){
    userscore++;
    userscorePara.innerText = userscore;
    msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
   } else{
    compscore++;
    compscorePara.innerText = userscore;
    msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
   }
};


 const playGame = (userchoice) =>{
    const compchoice =gencompchoice();
    if(userchoice === compchoice){
        //draw game
        drawgame();
    } else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissor,paper
           userwin =  compchoice ==="paper"? false: true;
        }else if(userchoice === "paper"){
            //rock,scissor
            userwin=compchoice === "scissor" ? false:true;
        } else{
            //rock ,paper
            userwin=compchoice === "rock"? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
 };

 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});