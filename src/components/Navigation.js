import React from 'react';
import { Route, Link } from 'react-router-dom';


const Navigation = () => {


    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/cryptocard'>Currency Index</Link>
        </div>
    )
}


export default Navigation;