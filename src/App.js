import "./App.css";

function App() {
  return (
    <div>
      <Page1 title="Delhi" id="1" />
      <Page1 title="Kolkata" id="2" />
      <Page1 title="Mumbai" id="3" />
    </div>
  );
}

function Page1(props) {
  return (
    <div>
      Hello World {props.id} {props.title}
    </div>
  );
}

export default App;
