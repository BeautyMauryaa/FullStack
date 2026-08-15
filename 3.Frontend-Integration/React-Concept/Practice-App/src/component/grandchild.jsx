export default function GrandChild() {
  const UserData = userContext(UserContext);
  return (
    <div style={{ height: "30px", width: "20px", border: "2px solid black" }}>
      <h1>GrandChild component</h1>
      <p> username is : {UserData}</p>
    </div>
  );
}
