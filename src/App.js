import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <Page1 />
    </div>
  );
}

function Page1() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
    </div>
  );
}

export default App;
