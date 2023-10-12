import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <form className="input">
        <input className="value" type="text" placeholder="Ma Todo List" />
        <input className="submit" type="submit" />
      </form>
      <span></span>
    </div>
  );
}

export default App;
