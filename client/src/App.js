import './Appv2.css';
import Welcome from './Welcome';
import OptionOne from './OptionOne';
import Homepage from './Homepage';
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

 return (
  <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/secondpage" element={<Welcome />} /> 
    <Route path="/secondpage/yesno" element={<OptionOne />} />
    </Routes>
  </BrowserRouter>
  </div>
 );
}

export default App;
