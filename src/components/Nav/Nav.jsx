// src/components/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <h1>Music Instrument Inventory</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/instruments">Instruments</Link>
                </li>
                <li>
                    <Link to="/create">Add Instrument</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
