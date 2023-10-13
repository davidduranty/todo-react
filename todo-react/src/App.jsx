import "./App.css";

function App() {
  

  return (
    <div className="main">
      <div className="container">
        <h1>Validation ToDo</h1>
        <input className="submit" type="submit" />
        <li></li>
      </div>
      <div className="container">
        <h1>TODO LIST</h1>
        <form className="input">
          <input className="value" type="text" placeholder="Ma Todo List" />
          <input className="submit" type="submit" />
        </form>
        <li></li>
      </div>
      <div className="container">
        <h1>Effacer ToDo</h1>
        <input className="submit" type="submit" />
        <li></li>
      </div>
    </div>
  );
}

export default App;
