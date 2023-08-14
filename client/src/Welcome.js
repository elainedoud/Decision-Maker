import React from 'react';
import { Link } from 'react-router-dom';

function Welcome (){
    return (
        <div className="Homepage">
           <h1>Start Here</h1>
           <nav>
            <Link to="yesno">Option 1</Link>
            </nav> 
        </div>
    )
}










export default Welcome