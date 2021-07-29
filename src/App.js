import './App.css';
import Industries from './core/industries';

function App() {
  const title = "My healthily Test"

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <Industries></Industries>
      </div>
    </div>
  );
}

export default App;
