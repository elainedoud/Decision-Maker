import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function OptionOne() {

    const [answer, setAnswer] = useState([])

    useEffect(() =>{
    let our_integer = Math.floor(Math.random() * 10)
    if (our_integer <= 4){
        setAnswer(true)
    }
    else {
        setAnswer(false)
    }
},[])

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