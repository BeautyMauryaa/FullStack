Good. Starting with **Variables and Data Types** is the correct move. If this foundation is weak, everything later (functions, async, React, Node) becomes messy. So understand it properly, not just memorize.

---

# 1. Variables in JavaScript

A **variable** is a container used to store data so that it can be used later in a program.

Example:

```javascript
let name = "Nova";
let age = 21;
```

Here:

* `name` stores a string
* `age` stores a number

---

# 2. Ways to Declare Variables

JavaScript has **three keywords** to create variables.

* `var`
* `let`
* `const`

---

# 3. var (Old Way)

`var` was used before ES6.

Example:

```javascript
var city = "Delhi";
```

### Characteristics

1. **Function Scoped**

It is accessible inside the whole function.

```javascript
function test(){
    var x = 10;
}
```

2. **Can be redeclared**

```javascript
var x = 10;
var x = 20;
```

3. **Can be reassigned**

```javascript
var x = 10;
x = 30;
```

4. **Hoisted**

JavaScript moves the declaration to the top during execution.

Example:

```javascript
console.log(x);
var x = 5;
```

Output:

```
undefined
```

Because JS internally does:

```javascript
var x;
console.log(x);
x = 5;
```

---

# 4. let (Modern Way)

`let` was introduced in **ES6** and is commonly used in modern code.

Example:

```javascript
let score = 50;
```

### Characteristics

1. **Block Scoped**

Accessible only inside `{ }`.

```javascript
if(true){
    let x = 10;
}
```

Outside the block:

```
ReferenceError
```

2. **Cannot be redeclared**

```javascript
let x = 10;
let x = 20; // error
```

3. **Can be reassigned**

```javascript
let x = 10;
x = 30;
```

4. **Hoisted but not initialized**

Accessing before declaration causes error.

```javascript
console.log(x);
let x = 5;
```

Output:

```
ReferenceError
```

This area is called **Temporal Dead Zone (TDZ)**.

---

# 5. const (Constant Variable)

`const` is used when the value should **not change**.

Example:

```javascript
const pi = 3.14;
```

### Characteristics

1. **Block scoped**

Same as `let`.

2. **Cannot be reassigned**

```javascript
const x = 10;
x = 20; // error
```

3. **Must be initialized**

```javascript
const x; // error
```

4. **Objects and arrays can still change**

```javascript
const user = {
    name: "Nova"
};

user.name = "Alex"; // allowed
```

Because the **reference is constant, not the internal values**.

---

# 6. Difference Between var, let, const

| Feature       | var      | let         | const       |
| ------------- | -------- | ----------- | ----------- |
| Scope         | Function | Block       | Block       |
| Redeclaration | Allowed  | Not allowed | Not allowed |
| Reassignment  | Allowed  | Allowed     | Not allowed |
| Hoisting      | Yes      | Yes (TDZ)   | Yes (TDZ)   |

---

# 7. Best Practice in Companies

Real codebases follow this pattern:

**Use `const` by default**

```javascript
const name = "Nova";
```

**Use `let` if value changes**

```javascript
let counter = 0;
counter++;
```

**Avoid `var`**

Modern companies almost never use it.

---

# 8. JavaScript Data Types

JavaScript has **two main categories** of data types.

### 1️⃣ Primitive Data Types

They store **single values**.

Types:

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

---

### String

Text data.

```javascript
let name = "Nova";
let msg = 'Hello';
```

---

### Number

All numbers (integer or decimal).

```javascript
let age = 21;
let price = 99.99;
```

JavaScript does **not separate int and float**.

---

### Boolean

Represents true or false.

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

---

### Undefined

A variable declared but **not assigned a value**.

```javascript
let x;
console.log(x);
```

Output:

```
undefined
```

---

### Null

Represents **intentional empty value**.

```javascript
let data = null;
```

Used when we intentionally say **no value exists**.

---

### Symbol

Used to create **unique identifiers**.

Mostly used in advanced frameworks.

```javascript
const id = Symbol("user");
```

---

### BigInt

Used for **very large numbers**.

```javascript
let big = 12345678901234567890n;
```

---

# 9. Reference Data Types

These store **complex data structures**.

Main ones:

* Object
* Array
* Function

Example:

```javascript
let user = {
    name: "Nova",
    age: 21
};
```

---

# 10. typeof Operator

Used to check data type.

Example:

```javascript
typeof "Hello"     // string
typeof 10          // number
typeof true        // boolean
typeof undefined   // undefined
typeof null        // object (JS bug)
```

---

# Small Advice

Don't just read this.

Test everything in **browser console or Node**.

Example practice:

```javascript
let a = 10;
const b = 20;
var c = 30;

console.log(a, b, c);
```

---

If you're serious about **company-level JS**, next we should cover:

**Truth y / Falsy values + Type coercion**

This is where **90% of developers start making mistakes** in real applications.


Good. Starting with **Variables and Data Types** is the correct move. If this foundation is weak, everything later (functions, async, React, Node) becomes messy. So understand it properly, not just memorize.

---

# 1. Variables in JavaScript

A **variable** is a container used to store data so that it can be used later in a program.

Example:

```javascript
let name = "Nova";
let age = 21;
```

Here:

* `name` stores a string
* `age` stores a number

---

# 2. Ways to Declare Variables

JavaScript has **three keywords** to create variables.

* `var`
* `let`
* `const`

---

# 3. var (Old Way)

`var` was used before ES6.

Example:

```javascript
var city = "Delhi";
```

### Characteristics

1. **Function Scoped**

It is accessible inside the whole function.

```javascript
function test(){
    var x = 10;
}
```

2. **Can be redeclared**

```javascript
var x = 10;
var x = 20;
```

3. **Can be reassigned**

```javascript
var x = 10;
x = 30;
```

4. **Hoisted**

JavaScript moves the declaration to the top during execution.

Example:

```javascript
console.log(x);
var x = 5;
```

Output:

```
undefined
```

Because JS internally does:

```javascript
var x;
console.log(x);
x = 5;
```

---

# 4. let (Modern Way)

`let` was introduced in **ES6** and is commonly used in modern code.

Example:

```javascript
let score = 50;
```

### Characteristics

1. **Block Scoped**

Accessible only inside `{ }`.

```javascript
if(true){
    let x = 10;
}
```

Outside the block:

```
ReferenceError
```

2. **Cannot be redeclared**

```javascript
let x = 10;
let x = 20; // error
```

3. **Can be reassigned**

```javascript
let x = 10;
x = 30;
```

4. **Hoisted but not initialized**

Accessing before declaration causes error.

```javascript
console.log(x);
let x = 5;
```

Output:

```
ReferenceError
```

This area is called **Temporal Dead Zone (TDZ)**.

---

# 5. const (Constant Variable)

`const` is used when the value should **not change**.

Example:

```javascript
const pi = 3.14;
```

### Characteristics

1. **Block scoped**

Same as `let`.

2. **Cannot be reassigned**

```javascript
const x = 10;
x = 20; // error
```

3. **Must be initialized**

```javascript
const x; // error
```

4. **Objects and arrays can still change**

```javascript
const user = {
    name: "Nova"
};

user.name = "Alex"; // allowed
```

Because the **reference is constant, not the internal values**.

---

# 6. Difference Between var, let, const

| Feature       | var      | let         | const       |
| ------------- | -------- | ----------- | ----------- |
| Scope         | Function | Block       | Block       |
| Redeclaration | Allowed  | Not allowed | Not allowed |
| Reassignment  | Allowed  | Allowed     | Not allowed |
| Hoisting      | Yes      | Yes (TDZ)   | Yes (TDZ)   |

---

# 7. Best Practice in Companies

Real codebases follow this pattern:

**Use `const` by default**

```javascript
const name = "Nova";
```

**Use `let` if value changes**

```javascript
let counter = 0;
counter++;
```

**Avoid `var`**

Modern companies almost never use it.

---

# 8. JavaScript Data Types

JavaScript has **two main categories** of data types.

### 1️⃣ Primitive Data Types

They store **single values**.

Types:

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

---

### String

Text data.

```javascript
let name = "Nova";
let msg = 'Hello';
```

---

### Number

All numbers (integer or decimal).

```javascript
let age = 21;
let price = 99.99;
```

JavaScript does **not separate int and float**.

---

### Boolean

Represents true or false.

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

---

### Undefined

A variable declared but **not assigned a value**.

```javascript
let x;
console.log(x);
```

Output:

```
undefined
```

---

### Null

Represents **intentional empty value**.

```javascript
let data = null;
```

Used when we intentionally say **no value exists**.

---

### Symbol

Used to create **unique identifiers**.

Mostly used in advanced frameworks.

```javascript
const id = Symbol("user");
```

---

### BigInt

Used for **very large numbers**.

```javascript
let big = 12345678901234567890n;
```

---

# 9. Reference Data Types

These store **complex data structures**.

Main ones:

* Object
* Array
* Function

Example:

```javascript
let user = {
    name: "Nova",
    age: 21
};
```

---

# 10. typeof Operator

Used to check data type.

Example:

```javascript
typeof "Hello"     // string
typeof 10          // number
typeof undefined   // undefined
typeof null        // object (JS bug)
```

---

# Small Advice

Don't just read this.

Test everything in **browser console or Node**.

Example practice:

```javascript
let a = 10;
const b = 20;
var c = 30;

console.log(a, b, c);
```

---

If you're serious about **company-level JS**, next we should cover:

**Truth y / Falsy values + Type coercion**

This is where **90% of developers start making mistakes** in real applications.
