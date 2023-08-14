import './App.css';
import Welcome from './Welcome';
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
      <Route path="/secondpage" 
        element={{Welcome}}
      />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
