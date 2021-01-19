import "./App.css";

/**
 * Custom Tag
 * Component <App />
 */
function App() {
  return (
    <div>
      <Page1 />

      <Page2 />
    </div>
  );
}

function Page1() {
  // Logical JS
  const num = 100;
  const str = "Hello World";
  const ref = { id: 1, city: "Mumbai", state: "Maharashtra" };
  const sum = (a, b) => a + b;

  return (
    <div>
      <div>Number {num}</div>
      <div>String {str}</div>
      <div>Function :: {sum(1, 1)}</div>

      <div>Ref City Name {ref.city} </div>
      <div>Ref State name {ref.state}</div>
    </div>
  );
}

function Page2() {
  const str = "Hello world";
  const list = ["Delhi", "Kolkata", "Mumbai", "Chennai"];

  const list1 = list.map((item, index) => <h3 key={index}>{item}</h3>);

  return (
    <div>
      <h2>Page2 List Option 1 Arrow Function with Return Statemetn</h2>
      {list.map((item, index) => {
        return <h3 key={index}>{item} </h3>;
      })}

      <h2>Page 2 List Option 2 :: Arrrow Function in One LIne</h2>
      {list.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <h2>Option 3:: We have extracted the logic at top level </h2>
      {list1}
    </div>
  );
}

export default App;
