import { Routes, Route, BrowserRouter } from "react-router-dom"

function Welcome (){
    return (
        <BrowserRouter>
            <Routes>
                <h4>Welcome</h4>
                 <div className="Secondpage">
                <Route path="yesno">
                    <h1>{Option_1}</h1>
               </Route>
                 </div>
            </Routes>
        </BrowserRouter>
    )
}










export default Welcome