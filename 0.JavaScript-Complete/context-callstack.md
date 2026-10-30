Alright. Next is a concept that quietly sits under **everything JavaScript does**. Once you understand it, many confusing things like **hoisting, closures, and async behavior** start making sense.

# JavaScript Execution Context & Call Stack

---

# 1️⃣ What is Execution Context

Execution Context is the **environment where JavaScript code runs and variables/functions are stored**.

Whenever JavaScript runs code, it creates an **execution context**.

There are mainly **two types**:

1. **Global Execution Context (GEC)**
2. **Function Execution Context (FEC)**

---

# 2️⃣ Global Execution Context

When a JavaScript program starts, the engine creates the **Global Execution Context**.

Example:

```javascript
let name = "Nova";

function greet(){
   console.log("Hello");
}

greet();
```

Steps JS takes internally:

1. Create **global execution context**
2. Store variables and functions in memory
3. Execute code line by line

---

# 3️⃣ Two Phases of Execution

Every execution context runs in **two phases**.

### 1. Memory Creation Phase

JavaScript scans the code and allocates memory.

Example:

```javascript
let x = 10;

function add(a,b){
   return a+b;
}
```

Memory phase:

```
x → undefined
add → function definition
```

Variables are **initialized with undefined first**.

---

### 2. Execution Phase

Now JavaScript runs the code.

```
x = 10
function ready to run
```

---

# 4️⃣ Function Execution Context

Every time a function runs, JavaScript creates **a new execution context** for that function.

Example:

```javascript
function add(a,b){
   return a + b;
}

add(5,3);
```

Steps:

1. Global execution context exists
2. `add()` is called
3. JS creates **function execution context**
4. Parameters get values
5. Function executes
6. Context is destroyed

---

# 5️⃣ Call Stack

The **Call Stack** keeps track of which function is currently executing.

It works like a **stack (LIFO – Last In First Out)**.

Example:

```javascript
function one(){
   two();
}

function two(){
   three();
}

function three(){
   console.log("Done");
}

one();
```

Execution order:

```
Global()
one()
two()
three()
```

Call Stack behavior:

```
Push → Global
Push → one
Push → two
Push → three
```

After finishing:

```
Pop → three
Pop → two
Pop → one
```

Output

```
Done
```

---

# 6️⃣ Call Stack Visualization

Code:

```javascript
function greet(){
   console.log("Hello");
}

function start(){
   greet();
}

start();
```

Stack flow:

```
Global()
start()
greet()
```

Then it unwinds.

---

# 7️⃣ Stack Overflow

If a function keeps calling itself without stopping, the call stack fills up.

Example:

```javascript
function test(){
   test();
}

test();
```

Error:

```
Maximum call stack size exceeded
```

This happens in **infinite recursion**.

---

# 8️⃣ Why This Topic Matters

Understanding execution context explains:

• hoisting
• closures
• recursion
• async behavior
• debugging errors

When developers understand this, debugging becomes **much easier**.

---

# Small Practice

Predict the output:

```javascript
function a(){
   console.log("A");
}

function b(){
   console.log("B");
   a();
}

function c(){
   console.log("C");
   b();
}

c();
```

Expected output:

```
C
B
A
```

Call stack order:

```
Global
c
b
a
```

---

# One Important Truth

Developers who understand **Execution Context + Closures + Async JS** usually have **a strong JavaScript foundation**. Many people skip these topics, which later causes confusion in frameworks like **React or Node**.

---

If you're continuing your **company-level JavaScript path**, the next critical topic should be:

**Asynchronous JavaScript**

because modern apps depend on:

* callbacks
* promises
* async/await
* API requests
* event loop

And this is where JavaScript becomes **really powerful — and also confusing for many developers**.
