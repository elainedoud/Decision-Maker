import { Routes, Route, BrowserRouter } from "react-router-dom"
import Option_1 from "./Option_1"

function Welcome (){
    return (
        <BrowserRouter>
            <Routes>
                <h4>Welcome</h4>
                 <div className="Secondpage">
                <Route path="yesno"
                    element={<h1>{Option_1}</h1>} />
                 </div>
            </Routes>
        </BrowserRouter>
    )
}










export default Welcome