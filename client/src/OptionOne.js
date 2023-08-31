import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function OptionOne() {

    const [answer, setAnswer] = useState([])

    /*useEffect(() =>{
    let our_integer = Math.floor(Math.random() * 10)
    if (our_integer <= 4){
        setAnswer(true)
    }
    else {
        setAnswer(false)
    }
},[])
{answer?<h1 clasName="yes">Yes</h1>:<h1 className="no">No</h1>} 

*/

    return (
    <div>
    <div className="page">
        <div className="box"> 
            <h1 className="yes">Yes</h1>
            <h1 className="no">No</h1>
        </div>
     </div>
     <nav className="optionnav">
        <Link to="/" className="optionlink">Return Home</Link>
     </nav>
     </div>
    )
}










export default OptionOne