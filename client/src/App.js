import './App.css';
import Welcome from './Welcome';
import OptionOne from './OptionOne';
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
        element={ <OptionOne />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
