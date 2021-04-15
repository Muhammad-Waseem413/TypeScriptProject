import "./App.css";

function App() {
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <div className="App">
      <h3> Welcome to the react typescript</h3>
      {sum(2, 4)}
    </div>
  );
}

export default App;
