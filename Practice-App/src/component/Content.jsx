export default function Content({ darkmode }) {
  const style = {
    height: "100vh",
    backgroundColor: darkmode ? "#333333" : "#ffffff",
    color: darkmode ? "#ffffff" : "#000000",
    padding: "20px",
  };
  return (
    <div style={style}>
      <h1>{darkmode ? "Dark Mode" : "Light Mode"}</h1>
    </div>
  );
}
