Good. **Events** are what make web pages **interactive**. Without events, a website would just be a static page. Events allow JavaScript to respond when users **click, type, submit forms, or interact with elements**.

Let’s cover this **in a practical company-level way**.

---

# 1️⃣ What is an Event

An **event** is an action that happens in the browser.

Examples:

- clicking a button
- typing in an input
- submitting a form
- pressing a key

JavaScript can **listen and respond to these actions**.

---

# 2️⃣ addEventListener()

The most common way to handle events.

Syntax

```javascript
element.addEventListener("event", function)
```

Example

HTML

```html
<button id="btn">Click Me</button>
```

JavaScript

```javascript
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

When the button is clicked → message appears in console.

---

# 3️⃣ Click Event

One of the most used events.

```javascript
button.addEventListener("click", function () {
  console.log("User clicked the button");
});
```

Used in:

- buttons
- menus
- toggles
- modals

---

# 4️⃣ Submit Event

Used for **forms**.

HTML

```html
<form id="form">
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

JavaScript

```javascript
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
});
```

`preventDefault()` stops the page from refreshing.

---

# 5️⃣ Change Event

Triggered when an input value changes.

HTML

```html
<input id="input" />
```

JavaScript

```javascript
const input = document.getElementById("input");

input.addEventListener("change", function () {
  console.log("Input changed");
});
```

Used for:

- dropdowns
- forms
- settings

---

# 6️⃣ Keydown Event

Triggered when a key is pressed.

Example

```javascript
document.addEventListener("keydown", function (event) {
  console.log(event.key);
});
```

Output example

```
a
Enter
ArrowUp
```

Used in:

- search bars
- shortcuts
- games

---

# 7️⃣ Event Object

When an event happens, JavaScript provides an **event object** containing information about the event.

Example

```javascript
button.addEventListener("click", function (event) {
  console.log(event);
});
```

Common properties

```text
event.target
event.type
event.key
event.preventDefault()
```

Example

```javascript
button.addEventListener("click", function (event) {
  console.log(event.target);
});
```

`event.target` tells which element triggered the event.

---

# 8️⃣ Event Bubbling

Events propagate **from child element to parent element**.

Example

HTML

```html
<div id="parent">
  <button id="child">Click</button>
</div>
```

JavaScript

```javascript
document
  .getElementById("parent")
  .addEventListener("click", () => console.log("Parent"));

document
  .getElementById("child")
  .addEventListener("click", () => console.log("Child"));
```

If you click the button:

Output

```
Child
Parent
```

Because the event **bubbles upward**.

---

# 9️⃣ Stop Event Bubbling

You can stop bubbling.

```javascript
button.addEventListener("click", function (event) {
  event.stopPropagation();
});
```

Now the parent event will **not run**.

---

# 🔟 Event Delegation (Very Important)

Instead of adding events to many elements, we attach **one event to the parent**.

Example

HTML

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

JavaScript

```javascript
document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});
```

Now clicking any list item prints its text.

Benefits

- better performance
- works for dynamically added elements
- fewer event listeners

This technique is used heavily in **React and large applications**.

---

# Real Example (Mini Project)

HTML

```html
<button id="btn">Click</button>
<p id="message"></p>
```

JavaScript

```javascript
const btn = document.getElementById("btn");
const msg = document.getElementById("message");

btn.addEventListener("click", function () {
  msg.textContent = "Button clicked!";
});
```

Clicking the button updates the page.

---

# Most Used Events in Real Projects

Important ones to remember:

```
click
submit
change
input
keydown
mouseover
mouseout
```

---

# Small Practice

### Task 1

Create a button that prints **"Hello Nova"** when clicked.

### Task 2

Detect when a user presses **Enter key**.

### Task 3

Use **event delegation** to detect which list item was clicked.

---

# One Honest Reality

Developers who understand:

- **DOM**
- **Events**
- **Event Delegation**

become **much faster at building interactive UI**.

Frameworks like **React** are basically **abstractions over DOM + events**.

---

If you want, I can now show you something extremely useful for interviews and real development:

**Top 25 JavaScript questions companies ask for MERN / frontend roles.**

These questions reveal instantly whether someone **really understands JavaScript or just watched tutorials**.
