import React from 'react';
import { Link } from 'react-router-dom';

function Homepage(){

    return (    
    <div>
        <h1 className="Homepage">Decision Maker</h1>
        <div className='welcomepage'>
        <nav>
        <Link to="/secondpage" className="welcome">Welcome</Link>
        </nav>
        </div>
     </div>

    )
}

export default Homepage;