Objects & Arrays (Very Important in Real Projects)

Almost all real applications work with objects and arrays because data from APIs, databases, and forms usually comes in these formats.

You must be comfortable reading, modifying, and transforming them.

1️⃣ Objects

An object stores data in key–value pairs.

Example
const user = {
name: "Nova",
age: 21,
city: "Delhi"
};

console.log(user);

Output

{ name: "Nova", age: 21, city: "Delhi" }
2️⃣ Access Object Properties
Dot notation
console.log(user.name);

Output

Nova
Bracket notation
console.log(user["age"]);

Output

21

Bracket notation is useful when keys are dynamic.

3️⃣ Modify Object Values
user.city = "Chandigarh";

console.log(user.city);

Output

Chandigarh
4️⃣ Add New Property
user.email = "nova@gmail.com";

console.log(user);
5️⃣ Delete Property
delete user.age;

console.log(user);
6️⃣ Object Destructuring (ES6)

Used heavily in React, Node.js, APIs.

Example

const user = {
name: "Nova",
age: 21
};

const { name, age } = user;

console.log(name);
console.log(age);

Output

Nova
21
7️⃣ Spread Operator with Objects

Used to copy or merge objects.

const user = {
name: "Nova",
age: 21
};

const updatedUser = {
...user,
city: "Delhi"
};

console.log(updatedUser);

Output

{ name: "Nova", age: 21, city: "Delhi" }

Very common in React state updates.

8️⃣ Arrays

Arrays store multiple values in order.

Example

let fruits = ["apple", "banana", "mango"];

console.log(fruits);
9️⃣ Access Array Elements
console.log(fruits[0]);

Output

apple
🔟 Array Methods (Very Important)

These are used everywhere in real applications.

map()

Transforms each element.

let numbers = [1,2,3];

let doubled = numbers.map(n => n \* 2);

console.log(doubled);

Output

[2,4,6]

Used heavily in React UI rendering.

filter()

Returns elements that match a condition.

let numbers = [1,2,3,4];

let even = numbers.filter(n => n % 2 === 0);

console.log(even);

Output

[2,4]
reduce()

Combines array values into one result.

let numbers = [1,2,3,4];

let sum = numbers.reduce((total, n) => total + n, 0);

console.log(sum);

Output

10
forEach()

Loops through an array.

let numbers = [1,2,3];

numbers.forEach(n => {
console.log(n);
});

Output

1
2
3
Real Company Example

API response example:

const users = [
{name:"Nova", age:21},
{name:"Alex", age:25},
{name:"Sam", age:30}
];

Get only names:

const names = users.map(user => user.name);

console.log(names);

Output

["Nova","Alex","Sam"]

This pattern appears everywhere in real projects.

Small Practice (Do This)
Task 1

Create an object

student
name
course
marks

Print student name.

Task 2

Create an array

[10,20,30,40]

Use map() to double values.

Task 3

Filter numbers greater than 20.

Task 4

Use reduce() to calculate total.

One Honest Reality

Developers who know array methods deeply are much faster in real work.

Most beginners only know:

for loop

But professionals use:

map
filter
reduce
