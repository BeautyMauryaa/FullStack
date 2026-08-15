
## 1. Components (The Architects)
* **Definition:** Independent, reusable UI building blocks.
* **The Rule:** Must start with a **Capital Letter** (PascalCase).
* **The Structure:** Returns a single root element (or a fragment `<>...</>`).

**Syntax:**
```jsx
function WelcomeCard() {
  return (
    <>
      <h1>Hello!</h1>
      <p>BCA Student Portfolio</p>
    </>
  );
}
```

---

## 2. JSX (The Language)
* **Definition:** JavaScript XML. It looks like HTML but has JavaScript power.
* **Key Rules:** * Use `className` instead of `class`.
    * Use `{ }` to inject any JavaScript variable or expression.
    * Self-close tags that have no children: `<img />`, `<br />`.

**Syntax:**
```jsx
const userName = "Noova";
const element = <div className="profile">{userName}</div>;
```

---

## 3. Props (The Communication)
* **Definition:** Data passed from Parent to Child.
* **The Rule:** **Immutable** (Read-Only). Do not try to change them in the child.
* **Destructuring:** Always unpack props in the function arguments for cleaner code.

**Syntax:**
```jsx
// Parent (App.jsx)
<UserCard name="Beauty" role="Admin" onJoin={handleJoin} />

// Child (UserCard.jsx)
function UserCard({ name, role, onJoin }) {
  return (
    <div>
      <h3>{name} - {role}</h3>
      <button onClick={onJoin}>Join</button>
    </div>
  );
}
```

---

## 4. Pro Cheat Sheet: The "Tricks"

| Feature | The Shortcut / Tip |
| :--- | :--- |
| **Import Path** | `./` means same folder; `../` means go up one level. |
| **Spread Props** | Use `{...data}` to pass all 20 properties of an object at once. |
| **TSX/JSX Clash** | Use `// @ts-ignore` to hide TypeScript errors on imports. |
| **Loops** | Use `.map()` ONLY on **Arrays `[]`**, never on single **Objects `{}`**. |
| **Fragment** | Use `<></>` to return multiple elements without adding extra `<div>` tags to the DOM. |



---

### One-Sentence Rule for Success:
> **Components** define the structure, **JSX** writes the content, and **Props** carry the data down the waterfall.