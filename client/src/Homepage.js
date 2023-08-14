import React from 'react';
import { Link } from 'react-router-dom';

function Homepage(){

    return (    
    <div className="Homepage">
        <h1>Decision Maker</h1>
        <nav>
        <Link to="/secondpage">Welcome</Link>
        </nav>
     </div>

    )
}

export default Homepage;