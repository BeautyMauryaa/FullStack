Good. **DOM Manipulation** is essential if you work in **frontend or MERN** because JavaScript interacts with the **HTML page through the DOM (Document Object Model)**.

Think of DOM as **a tree structure of HTML elements that JavaScript can read and modify**.

---

# 1️⃣ What is DOM

When a browser loads HTML, it converts the HTML into a **DOM tree**.

Example HTML

```html
<h1 id="title">Hello</h1>
```

JavaScript can access it like this:

```javascript
document.getElementById("title")
```

So JavaScript can **read, change, or delete elements**.

---

# 2️⃣ Selecting Elements

Before modifying anything, we must **select elements from the DOM**.

---

## document.getElementById()

Selects an element using its **id**.

HTML

```html
<h1 id="title">Hello</h1>
```

JavaScript

```javascript
const heading = document.getElementById("title");

console.log(heading);
```

---

## document.querySelector()

Selects the **first matching element** using CSS selectors.

HTML

```html
<p class="text">Welcome</p>
```

JavaScript

```javascript
const para = document.querySelector(".text");

console.log(para);
```

It works with:

```
#id
.class
tag
```

Example

```javascript
document.querySelector("#title")
document.querySelector(".text")
document.querySelector("p")
```

---

# 3️⃣ Changing Text (Manipulating DOM)

Once the element is selected, we can modify it.

---

## textContent

Changes only the **text inside the element**.

HTML

```html
<h1 id="title">Hello</h1>
```

JavaScript

```javascript
const title = document.getElementById("title");

title.textContent = "Hello Nova";
```

Result

```
Hello Nova
```

---

## innerHTML

Allows adding **HTML content inside an element**.

HTML

```html
<div id="box"></div>
```

JavaScript

```javascript
document.getElementById("box").innerHTML = "<h2>Welcome</h2>";
```

Result

```
<h2>Welcome</h2>
```

⚠️ Be careful: `innerHTML` can cause **XSS security issues** if used with user input.

---

# 4️⃣ Changing Styles

JavaScript can modify CSS.

HTML

```html
<p id="text">Hello</p>
```

JavaScript

```javascript
const text = document.getElementById("text");

text.style.color = "red";
text.style.fontSize = "30px";
```

Result

Text becomes **red and bigger**.

---

# 5️⃣ Creating Elements

JavaScript can create new elements dynamically.

Example:

```javascript
const newDiv = document.createElement("div");

newDiv.textContent = "New Element";

document.body.appendChild(newDiv);
```

Result
A new `<div>` appears on the page.

---

# 6️⃣ appendChild()

Adds an element to another element.

Example:

```javascript
const li = document.createElement("li");

li.textContent = "Item 1";

document.querySelector("ul").appendChild(li);
```

A new list item is added.

---

# 7️⃣ Removing Elements

Elements can also be removed.

Example

```javascript
const element = document.getElementById("title");

element.remove();
```

The element disappears from the page.

---

# 8️⃣ Real Example (Mini App)

HTML

```html
<button id="btn">Click</button>
<p id="message"></p>
```

JavaScript

```javascript
const btn = document.getElementById("btn");
const msg = document.getElementById("message");

btn.addEventListener("click", function(){
   msg.textContent = "Button clicked!";
});
```

When button is clicked → message appears.

This is **real frontend behavior**.

---

# 9️⃣ Common DOM Methods Used in Projects

Most used in real projects:

```
getElementById()
querySelector()
querySelectorAll()
createElement()
appendChild()
remove()
textContent
innerHTML
style
```

---

# Small Practice Tasks

### Task 1

Select a heading and change its text.

```
Old → Hello
New → Hello Nova
```

---

### Task 2

Create a new `<li>` element and add it to a list.

---

### Task 3

Change the background color of a div using JavaScript.

---

# Reality of Modern Frontend

In **React / Next.js**, we rarely manipulate DOM manually because React uses a **Virtual DOM**.

But understanding DOM is still important because:

• interviews ask it
• debugging UI requires it
• vanilla JS projects need it

---

Next topic that connects directly with DOM is:

**JavaScript Events**

because most DOM manipulation happens when users:

* click buttons
* type in inputs
* submit forms
* hover elements

And that’s how interactive websites work.
