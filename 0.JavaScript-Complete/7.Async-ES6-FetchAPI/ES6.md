Good. **ES6+ features** are used everywhere in modern JavaScript—React, Node.js, Next.js, and most company codebases. If you open any real project, you’ll see these constantly.

Let’s go through each one **with clear practical examples**.

---

# 1️⃣ Arrow Functions

Arrow functions are a shorter way to write functions.

### Normal Function

```javascript
function add(a, b){
   return a + b;
}
```

### Arrow Function

```javascript
const add = (a, b) => a + b;

console.log(add(2,3));
```

Output

```
5
```

Benefits:

* shorter syntax
* commonly used in callbacks
* widely used in React

Example with arrays

```javascript
const nums = [1,2,3];

const doubled = nums.map(n => n * 2);

console.log(doubled);
```

Output

```
[2,4,6]
```

---

# 2️⃣ Template Literals

Template literals allow **string interpolation** and multi-line strings.

Old way

```javascript
let name = "Nova";

console.log("Hello " + name);
```

Modern way

```javascript
let name = "Nova";

console.log(`Hello ${name}`);
```

Output

```
Hello Nova
```

Example

```javascript
let product = "Laptop";
let price = 50000;

console.log(`${product} costs ₹${price}`);
```

---

# 3️⃣ Destructuring

Destructuring extracts values from **objects or arrays**.

### Object Destructuring

```javascript
const user = {
   name: "Nova",
   age: 21
};

const {name, age} = user;

console.log(name);
console.log(age);
```

Output

```
Nova
21
```

Very common in React.

Example

```javascript
function greet({name}){
   console.log(`Hello ${name}`);
}
```

---

### Array Destructuring

```javascript
const numbers = [10,20,30];

const [a,b] = numbers;

console.log(a);
console.log(b);
```

Output

```
10
20
```

---

# 4️⃣ Spread Operator

Spread expands arrays or objects.

Example

```javascript
const arr1 = [1,2,3];

const arr2 = [...arr1,4,5];

console.log(arr2);
```

Output

```
[1,2,3,4,5]
```

Object example

```javascript
const user = {
   name:"Nova"
};

const updatedUser = {
   ...user,
   age:21
};

console.log(updatedUser);
```

Output

```
{name:"Nova", age:21}
```

Used heavily in **React state updates**.

---

# 5️⃣ Rest Operator

Rest collects multiple arguments into an array.

Example

```javascript
function sum(...nums){

   return nums.reduce((a,b) => a + b);

}

console.log(sum(1,2,3,4));
```

Output

```
10
```

Useful when number of arguments is unknown.

---

# 6️⃣ ES Modules

Modern JavaScript splits code into **modules (separate files)**.

### Export

```javascript
export function add(a,b){
   return a+b;
}
```

### Import

```javascript
import { add } from "./math.js";

console.log(add(2,3));
```

Output

```
5
```

Benefits:

* better code organization
* reusable modules
* used in React, Node, modern frameworks

---

# Real Example (Modern Code)

```javascript
import { useState } from "react";

const users = [
   {name:"Nova", age:21},
   {name:"Alex", age:25}
];

const names = users.map(({name}) => `Hello ${name}`);

console.log(names);
```

Features used here:

```
arrow function
destructuring
template literals
modules
```

---

# Small Practice

### Task 1

Use an arrow function to multiply two numbers.

```
multiply(4,5)
```

---

### Task 2

Use template literals to print

```
Hello Nova, your age is 21
```

---

### Task 3

Destructure this object

```javascript
const product = {
   name:"Phone",
   price:20000
}
```

---

### Task 4

Merge arrays

```
[1,2,3]
[4,5]
```

using spread.

---

# One Honest Reality

Developers who master **ES6 features** write much **cleaner and shorter code**.

Most modern projects expect developers to know:

```
arrow functions
destructuring
spread/rest
modules
template literals
```

without hesitation.

---

If you want, I can now show you something extremely useful for **interviews and real MERN jobs**:

**The Top 30 JavaScript interview questions companies ask frontend developers.**

These questions test **deep understanding**, not just syntax.
