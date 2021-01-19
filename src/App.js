import "./App.css";

/**
 * Custom Tag
 * Component <App />
 */
function App() {
  return (
    <div>
      <Page2 />
    </div>
  );
}

function AboutUs() {
  return <div>About Us</div>;
}

/**
 * How will we use variable inside jsx
 * {}
 */
function Page1() {
  // Logical JS
  const num = 100;

  return <div>Hello {num}</div>;
}

function Page2() {
  // Logical JS
  const num = 100;
  const str = "Hello World";
  const sum = (a, b) => a + b;

  return (
    <div>
      <div>Number {num}</div>
      <div>String {str}</div>
      <div>Function :: {sum(1, 1)}</div>
    </div>
  );
}

export default App;
