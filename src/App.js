import './App.css';

function App() {
  
  
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched"></span>
        <span className="remainder"></span>
      </div>
      <div className="typed-keys">

      </div>
      <div className="completed-words">
        <ol>
          <li></li>
        </ol>
      </div>
      <p>OK</p>
    </div>
  );
}

export default App;
