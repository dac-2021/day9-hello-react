import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-none d-md-block col-md-3 bg-primary">A</div>
        <div className="col-md-6 bg-info">B</div>
        <div className="d-none d-md-block col-md-3 bg-dark">C</div>
      </div>
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
