//what is async/await function: 
// - handle asynchronous operation

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function task1(){
    console.log("Task 1 start");
    await delay(2000);
    console.log("Task 1 done");
}

async function task2(){
    console.log("Task 2 start");
    await delay(1000);
    console.log("Task 2 done");
}

async function main(){
    console.log("=== Main Start ===");

    // Sequential
    await task1();
    await task2();

    console.log("=== Sequential done ===");

    // Parallel
    await Promise.all([task1(), task2()]);

    console.log("=== Parallel done ===");
}

main();

//non-blocking approach