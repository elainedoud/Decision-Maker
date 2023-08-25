import './App.css';
import Welcome from './Welcome';
import Option_1 from './Option_1';
import Homepage from './Homepage';
import { Routes, Route, BrowserRouter } from "react-router-dom"

require('react-dom')
window.React2 = require('react')
console.log(window.React1 === window.React2);

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Homepage />}/>
      <Route path="/secondpage" 
        element={ <Welcome />} /> 
      <Route path="/secondpage/yesno"
        element={ <Option_1 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
