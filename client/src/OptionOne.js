import React from 'react';
import { Link } from 'react-router-dom';

function OptionOne() {

    //const [answer, setAnswer] = useState("")

    let answer = true;

    let our_integer = Math.floor(Math.random() * 10)
    console.log(our_integer)

    return (
    <div className="page">
        <div className="box"> 
       {answer?<h1>Yes</h1>:<h1>No</h1>} 
        </div>
    <nav>
        <Link to="/" className="optionlink">Return Home</Link>
     </nav>
     </div>
    )
}










export default OptionOne