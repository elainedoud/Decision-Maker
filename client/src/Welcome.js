import { Routes, Route, BrowserRouter } from "react-router-dom"
import Option_1 from "./Option_1"

function Welcome (){
    return (
        <BrowserRouter>
            <Routes>
                <h4>Welcome</h4>
                <Route path="yesno"
                    element={{Option_1}} />
            </Routes>
        </BrowserRouter>
    )
}










export default Welcome