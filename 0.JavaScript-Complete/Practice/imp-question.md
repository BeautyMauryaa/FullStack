Good. Here are **30 JavaScript interview questions** that companies commonly ask for **frontend / MERN / JavaScript developer roles**. These questions test whether someone truly understands JavaScript fundamentals.

I'll organize them **by difficulty** so it's easier to practice.

---

# 🟢 Basic Level (Fundamentals)

### 1️⃣ Difference between `var`, `let`, and `const`

Key points:

* scope
* redeclaration
* reassignment
* hoisting

---

### 2️⃣ What are JavaScript data types?

Primitive types:

```
string
number
boolean
null
undefined
symbol
bigint
```

Reference types:

```
object
array
function
```

---

### 3️⃣ What is `undefined` vs `null`?

```
undefined → variable declared but not assigned
null → intentionally empty value
```

---

### 4️⃣ Difference between `==` and `===`

```
==  → loose comparison (type coercion)
=== → strict comparison (value + type)
```

Example

```javascript
5 == "5"   // true
5 === "5"  // false
```

---

### 5️⃣ What is a function in JavaScript?

Reusable block of code that performs a task.

---

### 6️⃣ What is a callback function?

A function passed into another function and executed later.

Example

```javascript
setTimeout(() => {
   console.log("Hello");
}, 1000);
```

---

### 7️⃣ What is an arrow function?

Short syntax for functions.

```javascript
const add = (a,b) => a + b
```

---

### 8️⃣ What is an array?

A structure used to store multiple values.

Example

```javascript
const arr = [1,2,3]
```

---

### 9️⃣ What is an object?

A collection of key-value pairs.

Example

```javascript
const user = {
   name:"Nova",
   age:21
}
```

---

### 🔟 What is the DOM?

DOM = **Document Object Model**

It allows JavaScript to **interact with HTML elements**.

---

# 🟡 Intermediate Level

### 11️⃣ What is closure?

A function remembering variables from its outer scope even after the outer function finishes.

---

### 12️⃣ What is lexical scope?

Scope determined by where functions are written.

---

### 13️⃣ What is the `this` keyword?

`this` refers to the object calling the function.

---

### 14️⃣ What are promises?

Objects representing the result of an asynchronous operation.

States:

```
pending
fulfilled
rejected
```

---

### 15️⃣ What is async/await?

A modern way to handle promises.

Example

```javascript
const data = await fetch(url)
```

---

### 16️⃣ What is the event loop?

Mechanism that manages **asynchronous operations in JavaScript**.

---

### 17️⃣ What is hoisting?

JavaScript moves variable/function declarations to the top of scope.

---

### 18️⃣ What is destructuring?

Extract values from objects or arrays.

```javascript
const {name} = user
```

---

### 19️⃣ What is the spread operator?

Expands elements.

```javascript
const newArr = [...arr]
```

---

### 20️⃣ What is event delegation?

Handling events on parent elements instead of multiple child elements.

---

# 🔴 Advanced Level

### 21️⃣ What is the prototype chain?

Mechanism through which objects inherit properties.

---

### 22️⃣ Difference between `call`, `apply`, and `bind`

```
call  → immediate call
apply → arguments as array
bind  → returns new function
```

---

### 23️⃣ What are higher-order functions?

Functions that take another function as argument or return a function.

Examples:

```
map
filter
reduce
```

---

### 24️⃣ What is currying?

Transforming a function with multiple arguments into nested functions.

Example

```javascript
sum(2)(3)
```

---

### 25️⃣ What is debounce?

Technique to limit function execution frequency.

Used in:

* search inputs
* scroll events

---

### 26️⃣ What is throttle?

Limits function execution to a fixed interval.

---

### 27️⃣ Difference between synchronous and asynchronous code

```
sync  → runs line by line
async → tasks run later
```

---

### 28️⃣ What is the Fetch API?

Used to make HTTP requests.

---

### 29️⃣ What are HTTP methods?

```
GET
POST
PUT
DELETE
```

---

### 30️⃣ What is JSON?

Data format used to exchange data between client and server.

Example

```json
{
 "name":"Nova",
 "age":21
}
```

---

# Important Reality

Interviewers usually focus heavily on:

```
closures
this keyword
async/await
promises
event loop
prototype chain
```

These topics separate **average JavaScript learners from strong developers**.

---

If you want, I can also show you something **extremely valuable for MERN interviews**:

**10 JavaScript coding problems companies ask in frontend interviews** (these appear very frequently in hiring tests).
