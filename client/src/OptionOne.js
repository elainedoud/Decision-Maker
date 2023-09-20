import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function OptionOne() {

    const [answer, setAnswer] = useState([])

    useEffect(() =>{
    let our_integer = Math.floor(Math.random() * 10)
    console.log(our_integer)
    if (our_integer <= 4){
        setAnswer(true)
    }
    else {
        setAnswer(false)
    }
},[])

    return (
    <div>
    <div className="page">
        <div className="practicebox"> 
        <h1 className="yestext">Yes</h1>
        <h1 className="notext">No</h1> 
        {answer?<h1 className="answerText">Yes</h1>:<h1 className="answerText">No</h1>}
        </div>
     </div>
     <nav className="optionnav">
        <Link to="/" className="optionlink">Return Home</Link>
     </nav>
     </div>
    )
}










export default OptionOne