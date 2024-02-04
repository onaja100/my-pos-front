import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'; // Importing CSS file

const Navbar = () => {
    return (
        <nav className="navigation-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sell">Sell</Link>
                </li>
                <li>
                    <Link to="/add">Add</Link>
                </li>
                <li>
                    <Link to="/vender">Supplier</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
