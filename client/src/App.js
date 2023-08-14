import './App.css';
import Welcome from './Welcome';
import Option_1 from './Option_1';
import Homepage from './Homepage';
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Homepage />}/>
      <Route path="/secondpage" 
        element={ <Welcome />} /> 
      <Route path="/yesno"
        element={ <Option_1 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
