let count=0;

console.log("start");

const timer=setInterval(()=>{
    count++;
    console.log(`${count} - Interval is going on.`);
    if(count==5){
        clearInterval(timer);//to stop the timer
        console.log("timer ended");
    }
},1000);

console.log("end");