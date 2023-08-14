import { Routes, Route, BrowserRouter } from "react-router-dom"

function Option_1() {
    return (
        <BrowserRouter>
        <Routes>
        <div>
            <h1>Yes</h1>
            <Route path="/" 
            element={App} /> 
        </div>
        </Routes>
        </BrowserRouter>
    )
}










export default Option_1