function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("step1");
            resolve("Step 1");
        }, 1000);
    });
}

function step2(prev) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("step2");
            resolve(prev + " -> Step 2");
        }, 1000);
    });
}

function step3(prev) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("step3");
            resolve(prev + " -> Step 3");
        }, 1000);
    });
}

// Chaining
step1()
.then((result) => {
    console.log(result);
    return step2(result);
})
.then((result) => {
    console.log(result);
    return step3(result);
})
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
});