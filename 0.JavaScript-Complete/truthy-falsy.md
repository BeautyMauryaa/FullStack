Good. This topic looks small but it **controls how conditions behave in real applications**. Many bugs in production happen because developers misunderstand **truthy/falsy and type coercion**. So understand it deeply.

---

# 1️⃣ Truthy and Falsy Values

In JavaScript, every value is automatically converted to **true or false** when used inside conditions.

Example:

```javascript
if(value){
   // runs if value is truthy
}
```

---

# 2️⃣ Falsy Values (Very Important)

JavaScript has **only 6 falsy values**.

These always behave as **false** in conditions.

| Value       | Meaning        |
| ----------- | -------------- |
| `false`     | Boolean false  |
| `0`         | Number zero    |
| `""`        | Empty string   |
| `null`      | No value       |
| `undefined` | Not assigned   |
| `NaN`       | Invalid number |

Example:

```javascript
let value = 0;

if(value){
   console.log("True");
}else{
   console.log("False");
}
```

Output

```
False
```

Because `0` is **falsy**.

---

# 3️⃣ Truthy Values

Everything **except the 6 falsy values** is truthy.

Examples:

```
"hello"
1
-1
[]
{}
"false"
"0"
```

Example:

```javascript
if("hello"){
   console.log("Runs");
}
```

Output

```
Runs
```

Even though it's a string.

---

# 4️⃣ Practical Example (Login Check)

```javascript
let username = "Nova";

if(username){
    console.log("User logged in");
}else{
    console.log("Login failed");
}
```

If username is empty:

```javascript
let username = "";
```

Output

```
Login failed
```

This is used **everywhere in web apps**.

---

# 5️⃣ Checking Arrays

```javascript
let arr = [];

if(arr){
   console.log("Array exists");
}
```

Output

```
Array exists
```

Even empty arrays are **truthy**.

---

# 6️⃣ Checking Objects

```javascript
let user = {};

if(user){
   console.log("Object exists");
}
```

Output

```
Object exists
```

Objects are also **truthy**.

---

# 7️⃣ Type Coercion

Type coercion means **JavaScript automatically converts one data type into another**.

There are two types.

1️⃣ Implicit coercion (automatic)
2️⃣ Explicit coercion (manual)

---

# 8️⃣ Implicit Type Coercion

JavaScript automatically converts types during operations.

Example:

```javascript
console.log("5" + 2);
```

Output

```
52
```

Because number `2` is converted to string.

---

Another example:

```javascript
console.log("5" - 2);
```

Output

```
3
```

Here `"5"` becomes a number.

---

Example:

```javascript
console.log(true + 1);
```

Output

```
2
```

Because

```
true = 1
false = 0
```

---

# 9️⃣ Equality vs Strict Equality

This is one of the **most important interview questions**.

### `==` (Loose Equality)

Allows type coercion.

```javascript
console.log(5 == "5");
```

Output

```
true
```

Because `"5"` becomes `5`.

---

### `===` (Strict Equality)

No type conversion.

```javascript
console.log(5 === "5");
```

Output

```
false
```

Because types are different.

Best practice in companies:

**Always use `===`**

---

# 🔟 Weird JavaScript Examples (Understand These)

Example 1

```javascript
console.log([] == false);
```

Output

```
true
```

Example 2

```javascript
console.log("" == 0);
```

Output

```
true
```

Example 3

```javascript
console.log(null == undefined);
```

Output

```
true
```

But

```javascript
console.log(null === undefined);
```

Output

```
false
```

---

# 11️⃣ Explicit Type Conversion

When we convert types ourselves.

### String conversion

```javascript
let num = 10;
String(num);
```

### Number conversion

```javascript
Number("10");
```

### Boolean conversion

```javascript
Boolean(1);  // true
Boolean(0);  // false
```

---

# 12️⃣ Real Example (API Data)

APIs often return **string numbers**.

```javascript
let price = "100";
let tax = 20;

console.log(Number(price) + tax);
```

Output

```
120
```

---

# Practice (Do This Yourself)

Predict outputs before running.

```javascript
console.log(Boolean(""));
console.log(Boolean("Nova"));
console.log(5 == "5");
console.log(5 === "5");
console.log(true + true);
```

Expected results

```
false
true
true
false
2
```

---

# One Brutal Truth

Developers who don't understand **truthy/falsy + coercion** write code like this:

```javascript
if(value == true)
```

Professional developers write:

```javascript
if(value)
```

Cleaner and faster.

---

Next topic you should learn is:

**Functions in JavaScript (company level)**

This includes:

* function declaration
* arrow functions
* callbacks
* higher order functions

These are **used everywhere in MERN, Node.js, and React**.
