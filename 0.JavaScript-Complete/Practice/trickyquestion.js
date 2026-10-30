// Here are some typical tricky questions and practice scenarios:
// Event Loop and Execution Order
// The most common tricky questions involve predicting the output of a code snippet that mixes synchronous code, setTimeout, Promise.resolve().then(), and process.nextTick (in Node.js). 
// JavaScript in Plain English
// JavaScript in Plain English
//  +4
// Question 1: What does the following code log to the console?
// javascript
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");
// Explanation: The output is "A", "D", "C", "B". Synchronous code runs first ("A", "D"). The Promise.resolve().then() callback is a microtask, which has higher priority and runs before the macrotask (setTimeout callback in the event loop's task queue).
// Question 2: The "Classic var + setTimeout Problem"
// javascript
// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }
// Explanation: This code logs "5" five times. Because var is function-scoped, by the time the setTimeout callbacks execute (after 1 second), the loop has finished and i has the value 5. Using let or a closure is the common solution to log 0 through 4. 
// YouTube
// YouTube
//  +4
// Promise and Async/Await Logic
// Question 3: Error Handling with async/await
// javascript
// async function example() {
//     try {
//         await Promise.reject("error!");
//         console.log("This line will not run");
//     } catch (e) {
//         console.log(e);
//     }
//     console.log("After try/catch");
// }
// example();
// Explanation: The output will be "error!" and then "After try/catch". The await keyword effectively pauses the async function's execution until the promise settles (rejects in this case), and the catch block handles the rejection, allowing the rest of the function to continue.
// Question 4: Chaining vs. Nesting Promises (Promise Hell avoidance)
// Problem: Write a function to perform a series of asynchronous operations sequentially without falling into "callback hell" or deeply nested .then() blocks.
// Practice: Use Promise chaining with .then() or async/await with try...catch for cleaner, sequential execution. 
// Medium
// Medium
//  +4
// Advanced Scenarios
// Promise Combinators (Promise.all, Promise.race, Promise.allSettled, Promise.any): Practice scenarios that require fetching data from multiple APIs concurrently (using Promise.all or Promise.allSettled) or handling race conditions where you want the first result back.
// Implement a Retry Mechanism: Write a function that automatically retries a failed asynchronous operation a specified number of times with increasing delays.
// Cancellable Promises: Explore techniques (like using a cancel token or wrapper promises) to achieve cancellation-like behavior, as native Promises are immutable once created. 
// Medium
// Medium
//  +3



console.log("A");
setTimeout(()=>console.log("B"),0);
Promise.resolve().then(()=>console.log("C"));
console.log("D");