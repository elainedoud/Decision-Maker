import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
    <div className="Homepage">
      <header className="App-header">
      Decision Maker
      </header>
      <Route path="secondpage">
      <h4>
        Welcome
      </h4>
      </Route>
    </div>
    <div className="Secondpage">
      <Route path="yesno">
    <h1>Option 1</h1>
      </Route>
    </div>
    <div className="DecidePage">
      <div>Yes/NoComponent</div>
        <Route path="/">
          <div>Return Home</div>
        </Route>
    </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
