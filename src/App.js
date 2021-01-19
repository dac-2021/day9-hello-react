import "./App.css";

function App() {
  return (
    <div>
      <Page1 />
    </div>
  );
}

function Page1() {
  let list = ["Delhi", "Kolkata", "Mumbai", "Chennai"];

  return (
    <div>
      <div>Working with List</div>

      {list.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
}

export default App;
