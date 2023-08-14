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
        element={<h2>{Welcome}</h2>}
      />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
