import React from 'react';
import { Link } from 'react-router-dom'

export default function Menu() {


    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About" >About</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
            {/* <li>
                <a href="/Login">Login a</a>
            </li> */}
        </ul>
    )
}
