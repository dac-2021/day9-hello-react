import "./App.css";

function App() {
  return (
    <div>
      <Greeting1 />
      <Greeting />
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

function Greeting() {
  const isMorning = true;

  return (
    <div>
      <div>Message :</div>

      {/* An Example of IF Condition */}
      {isMorning && <div>Good Morning</div>}
      {isMorning && (
        <div>
          <div>Multiline Good Morning</div>
        </div>
      )}
    </div>
  );
}

function Greeting1() {
  const checkIfTrue = false;

  return (
    <div>
      <div>IF and ELSE using Ternary Operator :</div>

      {/* An Example of IF Condition */}
      {/* expression ? 'Good Moring' : 'Good Afternoon' */}
      {checkIfTrue ? <div>Good Morning</div> : <div>Good Afternoon</div>}
    </div>
  );
}

export default App;
