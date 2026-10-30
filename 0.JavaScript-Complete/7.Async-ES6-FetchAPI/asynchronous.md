Good. **Asynchronous JavaScript** is one of the most important topics in modern development. Every real application constantly talks to **APIs, databases, or servers**, and JavaScript must handle those tasks **without freezing the UI**.

---

# 1️⃣ Why Asynchronous JavaScript Exists

JavaScript is **single-threaded**, meaning it runs **one task at a time**.

Example of synchronous behavior:

```javascript
console.log("Start");

console.log("Task");

console.log("End");
```

Output

```
Start
Task
End
```

Each line waits for the previous one.

But imagine this:

```javascript
fetch("server data");
```

Fetching data may take **2–5 seconds**. If JS waited synchronously, the entire page would **freeze**.

So JavaScript uses **asynchronous behavior**.

---

# 2️⃣ Example of Asynchronous Code

```javascript
console.log("Start");

setTimeout(() => {
   console.log("Async Task");
}, 2000);

console.log("End");
```

Output

```
Start
End
Async Task
```

Even though the timeout appears earlier, it runs **later** because it is asynchronous.

---

# 3️⃣ Callback Functions

A **callback** is a function passed to another function that runs later.

Example

```javascript
function fetchData(callback){
   console.log("Fetching data...");

   setTimeout(() => {
      callback("Data received");
   }, 2000);
}

fetchData(function(data){
   console.log(data);
});
```

Output

```
Fetching data...
Data received
```

Here:

```
callback → runs after async task finishes
```

---

# 4️⃣ Problem: Callback Hell

Too many nested callbacks make code messy.

Example

```javascript
getUser(function(user){
   getOrders(user, function(orders){
      getProducts(orders, function(products){
         console.log(products);
      });
   });
});
```

This pyramid structure is called **callback hell**.

To solve this, JavaScript introduced **Promises**.

---

# 5️⃣ Promises

A **Promise** represents a future value.

It has three states:

```
Pending
Resolved (fulfilled)
Rejected
```

Example

```javascript
const promise = new Promise((resolve, reject) => {

   let success = true;

   if(success){
      resolve("Task completed");
   } else {
      reject("Task failed");
   }

});

promise
.then(result => console.log(result))
.catch(error => console.log(error));
```

Output

```
Task completed
```

---

# 6️⃣ Fetch API (Promises in Real Projects)

Real applications use promises when requesting APIs.

Example

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
```

This fetches data from a server.

---

# 7️⃣ Async / Await (Modern Way)

Async/await makes asynchronous code look **like synchronous code**.

Example

```javascript
async function getUsers(){

   const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
   );

   const data = await response.json();

   console.log(data);
}

getUsers();
```

Benefits:

• easier to read
• cleaner error handling
• avoids promise chains

---

# 8️⃣ Error Handling with Async

Example

```javascript
async function loadData(){
   try{
      const res = await fetch("api");
      const data = await res.json();

      console.log(data);

   }catch(error){
      console.log("Error:", error);
   }
}
```

This prevents the application from crashing.

---

# 9️⃣ Event Loop (Core Concept)

JavaScript runtime includes:

```
Call Stack
Web APIs
Callback Queue
Event Loop
```

Flow:

1. JS runs synchronous code
2. Async tasks go to **Web APIs**
3. When finished → moved to **Callback Queue**
4. **Event Loop** pushes them into the **Call Stack**

Example again:

```javascript
console.log("Start");

setTimeout(() => {
   console.log("Timer done");
}, 2000);

console.log("End");
```

Execution order

```
Start
End
Timer done
```

Because timer goes through the **event loop system**.

---

# 🔟 Real Usage of Async JS

Asynchronous JavaScript powers:

• API requests
• database queries
• file uploads
• authentication
• background tasks
• real-time apps

Without async programming, modern web apps would not work.

---

# Practice Questions

Predict outputs before running.

### Question 1

```javascript
console.log("A");

setTimeout(() => {
   console.log("B");
}, 0);

console.log("C");
```

Answer

```
A
C
B
```

---

### Question 2

```javascript
async function test(){
   return "Hello";
}

test().then(console.log);
```

Output

```
Hello
```

---

# One Important Reality

Developers who truly understand:

• **Promises**
• **async/await**
• **Event Loop**

are much stronger JavaScript engineers.

Many developers use async code **without understanding how it works internally**, which causes debugging problems later.

---

If you're building **company-level JavaScript knowledge**, the final important piece after this is:

**Error Handling + Debugging + Developer Tools**

because companies expect developers to know how to **find and fix problems in real applications**, not just write code.
