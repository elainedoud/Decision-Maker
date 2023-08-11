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
      </div>
      <Route path="secondpage">
        <div>{Welcome}</div>
        </Route>
    <div className="DecidePage">
      <div>{Yes/NoComponent}</div>
        <Route path="/">
          <div>{Return_Home}</div>
        </Route>
    </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
